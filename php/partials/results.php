<?php
/** Results / Developer — mirrors src/components/landing/sections/results.tsx */
$items = [
    ['icon' => 'check', 't' => 'الالتزام بالتسليم في الوقت المحدد', 's' => 'سجل قوي في الالتزام بمواعيد التسليم'],
    ['icon' => 'award', 't' => 'جودة تنفيذ بمعايير عالمية', 's' => 'شراكات مع أفضل الاستشاريين والمقاولين'],
    ['icon' => 'headphones', 't' => 'خدمات ما بعد التسليم', 's' => 'إدارة وتشغيل وصيانة بمعايير عالمية'],
    ['icon' => 'shield', 't' => 'ثقة مبنية على تجربة', 's' => 'مشروعات ناجحة في مصر والإمارات'],
];
?>
<section class="reh-results" style="background:var(--bg-deep-soft);color:var(--on-deep);padding:100px 48px;border-top:1px solid var(--on-deep-line)">
  <div class="reh-results-grid" style="max-width:1280px;margin:0 auto;display:grid;grid-template-columns:0.85fr 1.1fr 1fr;gap:64px;align-items:start">
    <div class="reveal" style="padding-top:12px">
      <img src="<?= e(asset('/developer-logo.png')) ?>" alt="Developer" style="display:block;max-width:240px;width:100%;height:auto" />
      <p style="margin-top:22px;font-size:13px;color:var(--on-deep-mute);line-height:1.7">احدى شركات مدن القابضة</p>
    </div>

    <div class="reveal">
      <div class="eyebrow" style="margin-bottom:18px">
        <span>الخبرة الحقيقية لا تحتاج إلى ضجيج</span>
      </div>
      <h2 class="ar-display reh-results-h2" style="font-size:38px;margin:0;color:var(--on-deep)">
        <em>لأن النتائج</em> دائماً تتحدث عن نفسها
      </h2>
      <p class="reh-results-p" style="margin-top:22px;font-size:15px;line-height:2;color:var(--on-deep-mute)">
        في الوقت الذي أصبح فيه كثير من العملاء أكثر حذراً في قراراتهم العقارية… تزداد أهمية اختيار مطور يمتلك القدرة على تقديم تجربة مستقرة وواضحة من البداية وحتى ما بعد التسليم.
        <br />
        <br />
        ولهذا تعتمد مدن القابضة الإماراتية على جودة التنفيذ، والاهتمام بالتفاصيل، والتطوير طويل المدى.
        <br />
        <br />
        لأن المشروع الحقيقي لا يُبنى فقط ليبدو جيداً اليوم… بل ليحافظ على قيمته وجودته لسنوات طويلة قادمة.
      </p>
    </div>

    <div class="reveal" style="display:flex;flex-direction:column;gap:14px">
<?php foreach ($items as $it): ?>
      <div class="reh-results-item" style="display:flex;gap:18px;padding:18px 20px;border-radius:var(--radius);border:1px solid var(--on-deep-line);background:rgba(255,255,255,.025)">
        <span style="width:46px;height:46px;border-radius:var(--radius-sm);background:var(--accent-soft);color:var(--accent);display:grid;place-items:center;flex-shrink:0">
          <?= icon($it['icon'], 26) ?>
        </span>
        <div>
          <div style="font-size:15px;font-weight:700;color:var(--on-deep);margin-bottom:4px"><?= e($it['t']) ?></div>
          <div style="font-size:13px;color:var(--on-deep-mute);line-height:1.6"><?= e($it['s']) ?></div>
        </div>
      </div>
<?php endforeach; ?>
    </div>
  </div>
</section>
