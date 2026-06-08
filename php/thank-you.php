<?php
/** Thank-you — mirrors src/app/thank-you/page.tsx */
require __DIR__ . '/config.php';

$pageTitle = 'شكراً لك — رأس الحكمة';
$pageDescription = 'تم استلام طلبك بنجاح. سيتواصل معك أحد مستشارينا خلال 24 ساعة لتنسيق استشارتك المجانية.';
$noindex = true;

include __DIR__ . '/partials/head.php';
?>
<main style="flex:1;position:relative;min-height:100dvh;display:grid;place-items:center;padding:48px 24px;background:var(--bg-deep);color:var(--on-deep);overflow:hidden">
  <!-- Coastal backdrop + overlay — mirrors the lead-form card treatment. -->
  <div aria-hidden="true" style="position:absolute;inset:0;z-index:0;background-image:url('<?= e(asset('/hero-coastal.jpeg')) ?>');background-size:cover;background-position:center;opacity:.28"></div>
  <div aria-hidden="true" style="position:absolute;inset:0;z-index:1;background:radial-gradient(120% 120% at 50% 0%, rgba(8,27,44,.55) 0%, rgba(8,27,44,.88) 55%, rgba(8,27,44,.97) 100%)"></div>

  <div style="position:relative;z-index:2;width:100%;max-width:560px;text-align:center">
    <a href="<?= e(page('index.php')) ?>" aria-label="رأس الحكمة" style="display:inline-flex;margin-bottom:28px">
      <img src="<?= e(asset('/logo.png')) ?>" alt="رأس الحكمة" style="height:72px;width:auto;display:block" />
    </a>

    <div style="width:72px;height:72px;border-radius:50%;background:var(--accent-soft);color:var(--accent);display:grid;place-items:center;margin:0 auto 24px;box-shadow:0 0 0 8px rgba(200,154,75,.08)">
      <?= icon('check', 34, 2) ?>
    </div>

    <div class="eyebrow" style="justify-content:center;margin-bottom:16px">
      <span>تم الإرسال بنجاح</span>
    </div>

    <h1 class="ar-display" style="font-size:40px;margin:0;color:var(--on-deep)">شكراً لتواصلك معنا</h1>

    <p style="margin-top:18px;font-size:16.5px;line-height:1.9;color:rgba(240,233,218,.78)">
      تم استلام طلبك بنجاح. سيتواصل معك أحد مستشارينا خلال 24 ساعة لتنسيق استشارتك المجانية وعرض أحدث التفاصيل والأسعار وخطط السداد المتاحة.
    </p>

    <div style="display:inline-flex;align-items:center;gap:10px;margin-top:24px;padding:10px 18px;border-radius:999px;border:1px solid var(--accent-soft);background:rgba(200,154,75,.06);color:var(--on-deep);font-size:14px;font-weight:600">
      <span style="color:var(--accent);display:grid"><?= icon('clock', 18) ?></span>
      سنتواصل معك خلال 24 ساعة
    </div>

    <div style="margin-top:36px">
      <a href="<?= e(page('index.php')) ?>" class="btn btn-primary" style="padding-inline:30px">
        العودة للصفحة الرئيسية
        <?= icon('arrow', 16, null, 'style="transform:scaleX(-1)"') ?>
      </a>
    </div>
  </div>
</main>
<?php include __DIR__ . '/partials/foot.php'; ?>
