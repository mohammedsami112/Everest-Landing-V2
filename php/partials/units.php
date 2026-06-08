<?php
/** Units — mirrors src/components/landing/sections/units.tsx */
$units = [
    ['icon' => 'waves', 'label' => 'الشاليهات'],
    ['icon' => 'home', 'label' => 'الفيلات المستقلة'],
    ['icon' => 'building', 'label' => 'التاون هاوس'],
    ['icon' => 'building', 'label' => 'التوين هاوس'],
    ['icon' => 'bed', 'label' => 'الوحدات الفندقية'],
    ['icon' => 'star', 'label' => 'Branded Residences'],
];
$uses = [
    ['icon' => 'sun', 'label' => 'الاستخدام الصيفي'],
    ['icon' => 'star', 'label' => 'السكن الفاخر'],
    ['icon' => 'chart', 'label' => 'الاستثمار طويل المدى'],
];
$views = [
    ['icon' => 'waves', 'label' => 'البحر مباشرة'],
    ['icon' => 'waves', 'label' => 'البحيرات'],
    ['icon' => 'anchor', 'label' => 'المارينا'],
    ['icon' => 'tree', 'label' => 'المساحات الخضراء'],
    ['icon' => 'waves', 'label' => 'مناطق الـ Waterfront'],
];
$amenities = [
    ['icon' => 'bed', 'label' => 'فنادق عالمية'],
    ['icon' => 'sun', 'label' => 'Beach Clubs'],
    ['icon' => 'anchor', 'label' => 'Marina District'],
    ['icon' => 'bag', 'label' => 'مناطق تجارية وترفيهية'],
    ['icon' => 'utensils', 'label' => 'مطاعم وكافيهات'],
    ['icon' => 'headphones', 'label' => 'خدمات تشغيل وصيانة'],
    ['icon' => 'leaf', 'label' => 'مساحات مخصصة للراحة والاستجمام طوال العام'],
];

/** Mirrors the local Panel() component in units.tsx. */
if (!function_exists('reh_unit_panel')) {
    function reh_unit_panel(string $title, array $items, int $columns = 1): void { ?>
    <div style="padding:28px 28px 24px;border-radius:var(--radius-lg);border:1px solid var(--on-deep-line);background:rgba(255,255,255,.025)">
      <h3 class="ar-display" style="margin:0 0 18px;font-size:22px;color:var(--on-deep)"><?= e($title) ?></h3>
      <div class="reh-panel-list" style="display:grid;grid-template-columns:repeat(<?= $columns ?>, 1fr);gap:14px 24px">
<?php foreach ($items as $it): ?>
        <div style="display:flex;align-items:center;gap:12px">
          <span style="color:var(--accent);display:grid;flex-shrink:0"><?= icon($it['icon'], 20) ?></span>
          <span style="font-size:15px;color:var(--on-deep-mute);line-height:1.5"><?= e($it['label']) ?></span>
        </div>
<?php endforeach; ?>
      </div>
    </div>
<?php }
}
?>
<section class="reh-units" style="background:var(--bg-deep);color:var(--on-deep);padding:100px 48px">
  <div style="max-width:1280px;margin:0 auto">
    <div class="reveal eyebrow" style="margin-bottom:24px">
      <span>مدينة صُممت لتناسب أنماط حياة مختلفة… وليس نوعاً واحداً من السكن</span>
    </div>

    <div class="reveal">
      <h2 class="ar-display reh-units-h2" style="font-size:52px;margin:0;color:var(--on-deep)">
        تفاصيل الحياة <em>داخل رأس الحكمة</em>
      </h2>
      <p style="margin-top:22px;font-size:17px;line-height:1.9;color:var(--on-deep-mute);max-width:640px">
        يضم المشروع مجموعة متنوعة من الوحدات بمساحات وأنماط متعددة، إلى جانب مدينة متكاملة الخدمات تعمل طوال العام.
      </p>
    </div>

    <!-- الوحدات -->
    <div class="reveal reh-units-grid" style="margin-top:48px;display:grid;grid-template-columns:repeat(3, 1fr);gap:16px">
<?php foreach ($units as $u): ?>
      <div class="reh-units-card" style="display:flex;align-items:center;gap:18px;padding:22px 24px;border-radius:var(--radius);border:1px solid var(--on-deep-line);background:rgba(255,255,255,.03)">
        <span style="width:52px;height:52px;border-radius:var(--radius-sm);background:var(--accent-soft);color:var(--accent);display:grid;place-items:center;flex-shrink:0">
          <?= icon($u['icon'], 26) ?>
        </span>
        <div style="font-size:18px;font-weight:700;color:var(--on-deep)"><?= e($u['label']) ?></div>
      </div>
<?php endforeach; ?>
    </div>

    <!-- الاستخدامات -->
    <div class="reveal reh-units-uses" style="margin-top:24px;display:flex;flex-wrap:wrap;gap:12px">
<?php foreach ($uses as $u): ?>
      <span style="display:inline-flex;align-items:center;gap:10px;padding:10px 18px;border-radius:999px;border:1px solid var(--accent-soft);color:var(--on-deep);font-size:14px;font-weight:600;background:rgba(200,154,75,.05)">
        <span style="color:var(--accent);display:grid"><?= icon($u['icon'], 22) ?></span>
        <?= e($u['label']) ?>
      </span>
<?php endforeach; ?>
    </div>

    <!-- الإطلالات + الخدمات -->
    <div class="reveal reh-units-panels" style="margin-top:40px;display:grid;grid-template-columns:1fr 1.4fr;gap:24px">
      <?php reh_unit_panel('إطلالات صُممت بعناية', $views); ?>
      <?php reh_unit_panel('مدينة متكاملة الخدمات', $amenities, 2); ?>
    </div>
  </div>
</section>
