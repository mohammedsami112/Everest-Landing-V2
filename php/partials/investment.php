<?php
/** Investment — mirrors src/components/landing/sections/investment.tsx */
$pillars = [
    ['label' => 'جودة الحياة'],
    ['label' => 'الاستثمار طويل المدى'],
    ['label' => 'النمو المستمر لسنوات'],
];
?>
<section class="reh-invest" style="background:var(--bg);padding:100px 48px">
  <div style="max-width:1280px;margin:0 auto">
    <div class="reveal eyebrow" style="margin-bottom:24px">
      <span>حين تتجه الاستثمارات الدولية إلى مكان واحد… فغالباً هناك رؤية أكبر خلفه</span>
    </div>

    <div class="reh-invest-grid" style="display:grid;grid-template-columns:1.1fr 1fr;gap:64px;align-items:center">
      <div class="reveal">
        <h2 class="ar-display reh-invest-h2" style="font-size:52px;margin:0">
          المدن الساحلية الكبرى
          <br />
          <em>لا تُبنى بالصدفة</em>
        </h2>

        <p style="margin-top:24px;font-size:16.5px;line-height:2;color:var(--ink-soft);max-width:540px">
          شهدت السنوات الأخيرة تحركات ضخمة من الدولة المصرية والشراكات الدولية لتطوير رأس الحكمة وتحويلها إلى واحدة من أهم الوجهات الساحلية والاستثمارية في المنطقة.
          <br />
          <br />
          ومع دخول كيانات إماراتية كبرى في التطوير… أصبحت المدينة مرشحة بقوة لتكرار نماذج ناجحة عالمياً جمعت بين:
        </p>

        <div class="reh-invest-pillars" style="display:grid;grid-template-columns:repeat(3, 1fr);gap:14px;margin-top:28px">
<?php foreach ($pillars as $p): ?>
          <div style="display:flex;flex-direction:column;align-items:center;text-align:center;gap:12px;padding:22px 12px;border-radius:var(--radius);border:1px solid var(--accent-soft);background:rgba(255,255,255,.6)">
            <div style="font-size:14px;font-weight:700;color:var(--ink);line-height:1.4"><?= e($p['label']) ?></div>
          </div>
<?php endforeach; ?>
        </div>
      </div>

      <?= placeholder('aerial', 'رأس الحكمة — المخطط العام', 'reveal reh-invest-image', 'height:520px;width:100%') ?>
    </div>
  </div>
</section>
