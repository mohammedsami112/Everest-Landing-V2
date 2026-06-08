<?php
/**
 * Gallery + lightbox — mirrors src/components/landing/sections/gallery.tsx.
 * Tiles render the .ph gradient placeholder until a real photo path is set.
 * To go live: drop files into php/assets/img/gallery/ and set 'src' below
 * (e.g. '/gallery/01.jpg'); asset() resolves the path. The lightbox markup and
 * keyboard/scroll behaviour are built in landing.js from these tiles.
 */
$items = [
    ['kind' => 'aerial',  'alt' => 'منظر جوي لمدينة رأس الحكمة',   'src' => null],
    ['kind' => 'beach',   'alt' => 'الشاطئ والمياه الفيروزية',     'src' => null],
    ['kind' => 'coastal', 'alt' => 'الواجهة البحرية عند الغروب',    'src' => null],
    ['kind' => 'master',  'alt' => 'المخطط العام للمشروع',          'src' => null],
    ['kind' => 'beach',   'alt' => 'منطقة البيتش كلوب',             'src' => null],
    ['kind' => 'coastal', 'alt' => 'المارينا واليخوت',              'src' => null],
    ['kind' => 'aerial',  'alt' => 'البحيرات والمساحات الخضراء',    'src' => null],
    ['kind' => 'master',  'alt' => 'نماذج الوحدات السكنية',         'src' => null],
    ['kind' => 'beach',   'alt' => 'ممشى الواجهة البحرية',          'src' => null],
];
?>
<section id="gallery" class="reh-gallery" style="background:var(--bg);padding:100px 48px">
  <div style="max-width:1280px;margin:0 auto">
    <div class="reveal eyebrow" style="margin-bottom:24px">
      <span>معرض المشروع</span>
    </div>

    <h2 class="ar-display reveal reh-gallery-h2" style="font-size:52px;margin:0 0 44px">
      لمحات من <em>رأس الحكمة</em>
    </h2>

    <div class="reveal reh-gallery-grid" data-gallery style="display:grid;grid-template-columns:repeat(3, 1fr);gap:16px">
<?php foreach ($items as $i => $it): ?>
      <button type="button" class="reh-gallery-tile" data-gallery-index="<?= $i ?>"
        data-kind="<?= e($it['kind']) ?>" data-alt="<?= e($it['alt']) ?>"
        <?php if ($it['src']): ?>data-src="<?= e(asset($it['src'])) ?>"<?php endif; ?>
        aria-haspopup="dialog" aria-label="عرض الصورة: <?= e($it['alt']) ?>">
<?php if ($it['src']): ?>
        <img class="reh-gallery-img" src="<?= e(asset($it['src'])) ?>" alt="<?= e($it['alt']) ?>" loading="lazy" />
<?php else: ?>
        <span class="ph <?= e($it['kind']) ?> reh-gallery-img" aria-hidden="true"></span>
<?php endif; ?>
      </button>
<?php endforeach; ?>
    </div>
  </div>
</section>
