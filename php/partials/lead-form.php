<?php
/**
 * Lead form — mirrors src/components/landing/lead-form.tsx.
 * The React version validates on the client then routes to /thank-you. Here the
 * form POSTs to submit.php, which validates server-side and redirects to
 * thank-you.php on success. On failure submit.php stashes the values + errors in
 * the session and redirects back here, where they are re-rendered below.
 * landing.js adds the same instant client-side validation + "submitting" state.
 */
$timeOptions = ['في الصباح', 'بعد الظهر', 'في المساء', 'في أي وقت'];

$vals = $_SESSION['lead_values'] ?? [];
$errs = $_SESSION['lead_errors'] ?? [];
unset($_SESSION['lead_values'], $_SESSION['lead_errors']);

$val = static fn(string $k): string => e($vals[$k] ?? '');
$err = static fn(string $k): string => $errs[$k] ?? '';
$timeVal = $vals['time'] ?? '';

// Without a DB connection the lead can't be saved — render the whole form
// disabled and explain below the button.
$dbOk = db() !== null;
$disabled = $dbOk ? '' : ' disabled';

// Ad-tracking fields forwarded to submit.php. First render reads the landing
// query string (?an=..&nabd_category=..&a=..); after a failed submit the
// redirect back drops the query string, so the values stashed by submit.php
// in the session take precedence.
$hidden = [
    'interest'      => 'cali coast',
    'ad_network'    => $vals['ad_network'] ?? sanitize_string(trim((string) ($_GET['an'] ?? ''))),
    'nabd_category' => $vals['nabd_category'] ?? sanitize_string(trim((string) ($_GET['nabd_category'] ?? ''))),
    'agent'         => $vals['agent'] ?? sanitize_string(trim((string) ($_GET['a'] ?? ''))),
];
?>
<form method="post" action="<?= e(page('submit.php')) ?>" data-lead-form-el novalidate style="display:flex;flex-direction:column;gap:10px">
<?php foreach ($hidden as $k => $v): ?>
  <input type="hidden" name="<?= e($k) ?>" value="<?= e($v) ?>"<?= $disabled ?> />
<?php endforeach; ?>
  <div class="reh-form-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
    <!-- الاسم بالكامل -->
    <div class="field<?= $err('name') ? ' invalid' : '' ?>" style="grid-column:auto">
      <label>الاسم بالكامل<span class="req">*</span></label>
      <input type="text" name="name" value="<?= $val('name') ?>" placeholder="اكتب اسمك" dir="rtl"<?= $disabled ?> />
      <span class="err"><?= e($err('name')) ?></span>
    </div>

    <!-- رقم الهاتف -->
    <div class="field<?= $err('phone') ? ' invalid' : '' ?>" style="grid-column:auto">
      <label>رقم الهاتف<span class="req">*</span></label>
      <input type="tel" name="phone" value="<?= $val('phone') ?>" placeholder="01x xxx xxxx" dir="ltr" style="text-align:right"<?= $disabled ?> />
      <span class="err"><?= e($err('phone')) ?></span>
    </div>

    <!-- الوقت المناسب للتواصل -->
    <div class="field">
      <label>الوقت المناسب للتواصل</label>
      <select name="time" dir="rtl" style="color:<?= $timeVal ? 'var(--on-deep)' : 'rgba(240,233,218,.35)' ?>"<?= $disabled ?>>
        <option value="" disabled<?= $timeVal === '' ? ' selected' : '' ?>>اختر الوقت</option>
<?php foreach ($timeOptions as $t): ?>
        <option value="<?= e($t) ?>"<?= $timeVal === $t ? ' selected' : '' ?> style="color:#1a1814"><?= e($t) ?></option>
<?php endforeach; ?>
      </select>
      <span class="err"></span>
    </div>

    <!-- البريد الإلكتروني (اختياري) -->
    <div class="field<?= $err('email') ? ' invalid' : '' ?>" style="grid-column:auto">
      <label>البريد الإلكتروني (اختياري)</label>
      <input type="email" name="email" value="<?= $val('email') ?>" placeholder="name@email.com" dir="ltr" style="text-align:right"<?= $disabled ?> />
      <span class="err"><?= e($err('email')) ?></span>
    </div>
  </div>

  <button type="submit" class="btn btn-primary" data-submit-btn style="margin-top:6px;width:100%"<?= $disabled ?>>
    <span data-submit-label>احجز استشارة مجانية</span>
    <?= icon('arrow', 16, null, 'data-submit-icon style="transform:scaleX(-1)"') ?>
  </button>
<?php if (!$dbOk): ?>

  <p class="err" role="alert" style="display:block;text-align:center;font-size:13px;margin:4px 0 0">
    عذرًا، توجد مشكلة مؤقتة لدينا. يرجى المحاولة مرة أخرى لاحقًا.
  </p>
<?php endif; ?>

  <div style="display:flex;align-items:center;justify-content:center;gap:8px;color:var(--on-deep-mute);font-size:12.5px;margin-top:4px">
    <?= icon('shield', 14) ?>
    سيتم التواصل معك خلال 24 ساعة
  </div>
</form>
