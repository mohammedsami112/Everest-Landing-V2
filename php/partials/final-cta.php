<?php
/** Final CTA + lead form card — mirrors src/components/landing/sections/final-cta.tsx */
$pillars = [
    ['icon' => 'pin', 'label' => 'موقع استثنائي'],
    ['icon' => 'building', 'label' => 'تطوير إماراتي'],
    ['icon' => 'compass', 'label' => 'بنية حديثة'],
    ['icon' => 'chart', 'label' => 'خطة نمو طويلة المدى'],
];
$stats = [
    ['icon' => 'wallet', 'value' => '5%', 'unit' => null, 'label' => 'مقدم'],
    ['icon' => 'calendar', 'value' => '8', 'unit' => 'سنوات', 'label' => 'تسهيلات سداد تصل إليها'],
    ['icon' => 'key', 'value' => '3.5', 'unit' => 'سنة', 'label' => 'موعد الاستلام'],
];
$details = ['أحدث الأسعار', 'الوحدات المتاحة', 'المساحات المختلفة', 'وخطط السداد الحالية'];
?>
<section class="reh-cta" style="background:var(--bg);padding:96px 48px;border-top:1px solid var(--line)">
  <div style="max-width:1180px;margin:0 auto">
    <!-- القرار يبدأ من وضوح التفاصيل -->
    <div class="reveal" style="text-align:center;max-width:760px;margin:0 auto">
      <div class="eyebrow" style="margin-bottom:18px;justify-content:center">
        <span>القرار يبدأ من وضوح التفاصيل</span>
      </div>
      <h2 class="ar-display reh-cta-h2" style="font-size:44px;margin:0;color:var(--ink)">
        رأس الحكمة ليست مجرد مدينة جديدة على الساحل…
        <br />
        <em>بل مشروع متكامل</em>
      </h2>
      <p style="margin-top:20px;font-size:16.5px;line-height:1.9;color:var(--ink-soft)">
        بعد كل ما رأيته حتى الآن، يبدأ السؤال الطبيعي: ما هي الوحدات المتاحة؟ وما المساحات والإطلالات المناسبة لك؟ اطّلع على أحدث التفاصيل والأسعار الحالية قبل تحديثات الطرح القادمة.
      </p>

      <div class="reh-cta-pillars" style="margin-top:26px;display:flex;flex-wrap:wrap;justify-content:center;gap:12px">
<?php foreach ($pillars as $p): ?>
        <span style="display:inline-flex;align-items:center;gap:9px;padding:9px 16px;border-radius:999px;border:1px solid var(--accent-soft);background:rgba(200,154,75,.06);color:var(--ink);font-size:14px;font-weight:600">
          <span style="color:var(--accent-deep);display:grid"><?= icon($p['icon'], 20) ?></span>
          <?= e($p['label']) ?>
        </span>
<?php endforeach; ?>
      </div>
    </div>

    <!-- الأرقام -->
    <div class="reveal reh-cta-stats" style="margin-top:48px;display:grid;grid-template-columns:repeat(3, 1fr);gap:16px">
<?php foreach ($stats as $s): ?>
      <div style="display:flex;align-items:center;gap:18px;padding:26px 28px;border-radius:var(--radius-lg);border:1px solid var(--line);background:var(--card);box-shadow:var(--shadow-sm)">
        <span style="width:54px;height:54px;border-radius:var(--radius);background:var(--accent-soft);color:var(--accent-deep);display:grid;place-items:center;flex-shrink:0">
          <?= icon($s['icon'], 26) ?>
        </span>
        <div>
          <div class="ar-display" style="font-size:34px;line-height:1;color:var(--ink);display:flex;align-items:baseline;gap:6px">
            <?= e($s['value']) ?>
<?php if ($s['unit']): ?>
            <span style="font-size:16px;color:var(--accent-deep)"><?= e($s['unit']) ?></span>
<?php endif; ?>
          </div>
          <div style="margin-top:6px;font-size:13.5px;color:var(--ink-mute)"><?= e($s['label']) ?></div>
        </div>
      </div>
<?php endforeach; ?>
    </div>

    <!-- الفورم -->
    <div class="reveal" style="margin-top:48px;background:var(--bg-deep);color:var(--on-deep);border-radius:var(--radius-xl);overflow:hidden;position:relative;box-shadow:0 30px 80px -30px rgba(8,27,44,.4)">
      <div style="position:absolute;inset:0;z-index:0;background-image:url('<?= e(asset('/hero-coastal.jpeg')) ?>');background-size:cover;background-position:center;opacity:.32"></div>
      <div style="position:absolute;inset:0;z-index:1;background:linear-gradient(265deg, rgba(8,27,44,.96) 0%, rgba(8,27,44,.86) 45%, rgba(8,27,44,.55) 100%)"></div>

      <div class="reh-cta-grid" style="position:relative;z-index:2;display:grid;grid-template-columns:1fr 1.05fr">
        <div class="reh-cta-left" style="padding:64px 48px 64px 40px">
          <div class="eyebrow" style="margin-bottom:18px">
            <span>الخطوة التالية ليست الشراء</span>
          </div>
          <h3 class="ar-display" style="font-size:32px;margin:0;color:var(--on-deep)">
            بل الحصول على
            <br />
            <em>المعلومات الصحيحة أولاً</em>
          </h3>
          <p class="reh-cta-p" style="margin-top:20px;font-size:15.5px;line-height:1.9;color:rgba(240,233,218,.78);max-width:420px">
            إذا كانت الفكرة مناسبة لك، يمكنك الآن الاطلاع على ما يجعل اتخاذ القرار أسهل وأكثر وضوحاً:
          </p>

          <div style="margin-top:22px;display:flex;flex-direction:column;gap:12px">
<?php foreach ($details as $d): ?>
            <div style="display:flex;align-items:center;gap:12px">
              <span style="color:var(--accent);display:grid"><?= icon('check', 20) ?></span>
              <span style="font-size:15.5px;color:var(--on-deep)"><?= e($d) ?></span>
            </div>
<?php endforeach; ?>
          </div>
        </div>

        <div class="reh-cta-right" style="background:rgba(11, 32, 51, 0.72);backdrop-filter:blur(18px) saturate(140%);-webkit-backdrop-filter:blur(18px) saturate(140%);border-inline-start:1px solid var(--on-deep-line);padding:48px 40px">
          <div style="margin-bottom:18px">
            <div class="mono" style="color:var(--accent);margin-bottom:6px">· سجّل بياناتك ·</div>
            <h3 class="ar-display" style="margin:0;font-size:26px;color:var(--on-deep)">اطلب التفاصيل والأسعار</h3>
            <p style="margin:6px 0 0;font-size:13px;color:var(--on-deep-mute)">املأ النموذج وسيتواصل معك مستشار خلال 24 ساعة.</p>
          </div>
          <?php include __DIR__ . '/lead-form.php'; ?>
        </div>
      </div>
    </div>
  </div>
</section>
