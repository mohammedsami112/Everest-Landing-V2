<?php
/** Why Hekma — mirrors src/components/landing/sections/why-hekma.tsx */
$items = [
    ['icon' => 'tree', 'label' => 'أكثر هدوءاً'],
    ['icon' => 'building', 'label' => 'أكثر تنظيماً'],
    ['icon' => 'pin', 'label' => 'وأكثر قرباً مما يبحث عنه الناس اليوم'],
];
?>
<section class="reh-why" style="background:var(--bg);padding:96px 48px">
  <div style="max-width:1280px;margin:0 auto">
    <div class="reveal eyebrow" style="margin-bottom:24px">
      <span>ربما لهذا السبب تتجه الأنظار نحو رأس الحكمة</span>
    </div>

    <div class="reh-why-grid" style="display:grid;grid-template-columns:1.05fr 1fr;gap:64px;align-items:start">
      <div class="reveal">
        <h2 class="ar-display reh-why-h2" style="font-size:56px;margin:0">
          لأن بعض المدن
          <br />
          <em>لا تُبنى فقط للبيع</em>
        </h2>
        <p class="reh-why-p" style="margin-top:22px;font-size:17px;line-height:1.9;color:var(--ink-soft);max-width:480px">
          بل لتقديم تجربة حياة مختلفة بالكامل.
        </p>

        <img src="<?= e(asset('/why-hekma.jpg')) ?>" alt="رأس الحكمة" class="reveal reh-why-image"
          style="margin-top:36px;height:320px;width:100%;object-fit:cover;border-radius:var(--radius-lg);display:block" />
      </div>

      <div class="reveal" style="padding-top:8px">
        <p style="margin:0 0 28px;font-size:18px;color:var(--ink-soft);font-weight:500">مدينة يشعر فيها كل شيء بأنه:</p>

        <div style="display:flex;flex-direction:column;gap:14px">
<?php foreach ($items as $it): ?>
          <div class="card reh-why-card" style="display:flex;align-items:center;gap:22px;padding:22px 26px;border:1px solid var(--accent-soft);background:rgba(255,255,255,.6)">
            <span class="reh-why-card-icon" style="width:56px;height:56px;border-radius:var(--radius);background:var(--accent-soft);color:var(--accent-deep);display:grid;place-items:center;flex-shrink:0">
              <?= icon($it['icon'], 28) ?>
            </span>
            <div class="reh-why-card-label" style="font-size:22px;font-weight:700;color:var(--ink)"><?= e($it['label']) ?></div>
            <span style="margin-inline-start:auto;color:var(--accent);opacity:.5"><?= icon('arrow', 18, null, 'style="transform:scaleX(-1)"') ?></span>
          </div>
<?php endforeach; ?>
        </div>

        <p style="margin-top:36px;font-size:16px;line-height:1.9;color:var(--ink-soft)">
          ولهذا أصبحت المشروعات المتكاملة هي الأكثر جذباً لمن يبحثون عن جودة حياة واستثمار أقوى.
        </p>
      </div>
    </div>
  </div>
</section>
