<?php
/** Lifestyle — mirrors src/components/landing/sections/lifestyle.tsx */
$items = [
    ['icon' => 'leaf', 'label' => 'وقتاً أهدأ'],
    ['icon' => 'scale', 'label' => 'حياة أكثر توازناً'],
    ['icon' => 'compass', 'label' => 'تجربة تشعر فيها أن كل شيء صُمم لتستمتع بهدوء أكبر وجودة أعلى'],
];
?>
<section class="reh-life" style="background:var(--bg);padding:100px 48px">
  <div style="max-width:1280px;margin:0 auto">
    <div class="reveal eyebrow" style="margin-bottom:24px">
      <span>بعض الأماكن تغيّر طريقة شعورك بالحياة</span>
    </div>

    <div class="reh-life-grid" style="display:grid;grid-template-columns:1fr 1.05fr;gap:64px;align-items:center">
      <?= placeholder('beach', 'رأس الحكمة — الواجهة البحرية', 'reveal reh-life-image', 'height:520px;width:100%') ?>

      <div class="reveal">
        <h2 class="ar-display reh-life-h2" style="font-size:56px;margin:0">
          الحياة التي تبدأ
          <br />
          <em>عندما يهدأ كل شيء</em>
        </h2>

        <p style="margin-top:24px;font-size:17px;line-height:1.9;color:var(--ink-soft);max-width:500px">
          حيث يصبح البحر جزءاً من يومك… وليس مجرد إجازة.
          <br />
          تستيقظ على هدوء مختلف… سماء مفتوحة… ونسيم يحمل إحساساً بالراحة والخصوصية.
        </p>

        <p style="margin:32px 0 16px;font-size:18px;font-weight:600;color:var(--ink)">مدينة تمنحك:</p>

        <div style="display:flex;flex-direction:column;gap:12px">
<?php foreach ($items as $it): ?>
          <div class="reh-life-item" style="display:flex;align-items:center;gap:18px;padding:18px 22px;border-radius:var(--radius);border:1px solid var(--accent-soft);background:rgba(255,255,255,.6)">
            <span style="width:48px;height:48px;border-radius:var(--radius-sm);background:var(--accent-soft);color:var(--accent-deep);display:grid;place-items:center;flex-shrink:0">
              <?= icon($it['icon'], 26) ?>
            </span>
            <div style="font-size:16px;font-weight:600;color:var(--ink);line-height:1.6"><?= e($it['label']) ?></div>
          </div>
<?php endforeach; ?>
        </div>
      </div>
    </div>
  </div>
</section>
