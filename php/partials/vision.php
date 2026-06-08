<?php
/** Vision — mirrors src/components/landing/sections/vision.tsx */
$pillars = [
    ['icon' => 'leaf', 'label' => 'الاستدامة'],
    ['icon' => 'globe', 'label' => 'سهولة الاتصال بالعالم'],
    ['icon' => 'building', 'label' => 'البنية الحديثة'],
    ['icon' => 'chart', 'label' => 'والاستثمار طويل المدى'],
];
?>
<section class="reh-vision" style="background:var(--bg-deep);color:var(--on-deep);padding:100px 48px">
  <div style="max-width:1280px;margin:0 auto">
    <div class="reveal eyebrow" style="margin-bottom:24px">
      <span>أغلب المدن الساحلية الناجحة عالمياً بدأت بفكرة مختلفة</span>
    </div>

    <div class="reh-vision-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center">
      <div class="reveal">
        <h2 class="ar-display reh-vision-h2" style="font-size:56px;margin:0;color:var(--on-deep)">
          مدينة متكاملة…
          <br />
          <em>وليست مجرد وحدات للبيع</em>
        </h2>

        <p style="margin-top:26px;font-size:17px;line-height:1.9;color:var(--on-deep-mute)">
          ولهذا تبنّت مدن القابضة الإماراتية منهج تطوير يعتمد على:
        </p>

        <div class="reh-vision-pillars" style="display:grid;grid-template-columns:repeat(4, 1fr);gap:16px;margin-top:28px">
<?php foreach ($pillars as $p): ?>
          <div style="display:flex;flex-direction:column;align-items:center;text-align:center;gap:12px;padding:20px 8px;border-radius:var(--radius);background:rgba(255,255,255,.04);border:1px solid var(--on-deep-line)">
            <span style="width:48px;height:48px;border-radius:var(--radius);background:var(--accent-soft);color:var(--accent);display:grid;place-items:center">
              <?= icon($p['icon'], 26) ?>
            </span>
            <div style="font-size:13px;font-weight:600;color:var(--on-deep);line-height:1.4"><?= e($p['label']) ?></div>
          </div>
<?php endforeach; ?>
        </div>

        <p style="margin-top:32px;font-size:16px;line-height:1.9;color:var(--on-deep-mute);max-width:480px">
          لتحويل رأس الحكمة إلى وجهة ساحلية عالمية قادرة على النمو والعمل طوال العام.
        </p>
      </div>

      <img src="<?= e(asset('/vision.jpg')) ?>" alt="رؤية المشروع" class="reveal reh-vision-image"
        style="height:540px;width:100%;object-fit:cover;border-radius:var(--radius-lg);display:block" />
    </div>
  </div>
</section>
