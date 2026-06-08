<?php
/** Hero — mirrors src/components/landing/sections/hero.tsx */
?>
<section class="reh-hero" style="position:relative;overflow:hidden;background:var(--bg-deep);color:var(--on-deep);min-height:720px">
  <div style="position:absolute;inset:0;z-index:0;background-image:url('<?= e(asset('/hero-coastal.jpeg')) ?>');background-size:cover;background-position:center center"></div>
  <div style="position:absolute;inset:0;z-index:1;background:linear-gradient(265deg, rgba(8,27,44,.94) 0%, rgba(8,27,44,.85) 30%, rgba(8,27,44,.4) 65%, rgba(8,27,44,.15) 100%)"></div>

  <div class="reh-hero-inner" style="position:relative;z-index:2;max-width:1280px;margin:0 auto;padding:120px 48px 140px;display:flex;flex-direction:column;align-items:flex-start;text-align:right">
    <div class="reveal" style="max-width:720px;width:100%">
      <div class="eyebrow reh-hero-eyebrow" style="color:var(--accent);margin-bottom:28px;justify-content:flex-start">
        <span>واحدة من أقوى الفرص العقارية في الساحل</span>
      </div>

      <h1 class="ar-display reh-hero-h1" style="font-size:88px;margin:0;color:var(--on-deep);font-weight:800;text-shadow:0 2px 30px rgba(0,0,0,.35)">
        مدينة ساحلية
        <br />
        <em style="font-family:var(--font-display), var(--font-ar);font-style:italic">بمعايير عالمية</em>
      </h1>

      <div class="reh-hero-badge" style="display:inline-flex;align-items:center;gap:10px;margin-top:28px;padding:10px 18px;border:1px solid var(--accent);border-radius:999px;color:var(--accent);font-size:14px;font-weight:600;background:rgba(8,27,44,.35);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px)">
        <span style="width:6px;height:6px;background:var(--accent);border-radius:50%"></span>
        تحت إشراف إماراتي
      </div>

      <p class="reh-hero-p" style="margin-top:28px;font-size:18px;line-height:1.9;color:rgba(240,233,218,.85);max-width:520px;text-shadow:0 1px 14px rgba(0,0,0,.4)">
        تجربة متكاملة تجمع بين الفخامة والهدوء والاستثمار…
        <br />
        في واحدة من أقوى الوجهات الجديدة على ساحل البحر المتوسط.
      </p>

      <div class="reh-hero-cta-row" style="margin-top:40px;display:flex;gap:12px;justify-content:flex-start;flex-wrap:wrap">
        <button class="btn btn-primary" data-scroll-to-form>
          اكتشف تفاصيل المشروع <?= icon('arrow', 16, null, 'style="transform:scaleX(-1)"') ?>
        </button>
      </div>
    </div>
  </div>
</section>
