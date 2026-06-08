<?php
/**
 * Home — mirrors src/app/page.tsx + src/app/layout.tsx + landing.tsx.
 * Section order follows components/landing/landing.tsx exactly.
 */
require __DIR__ . '/config.php';

$pageTitle = 'Ras El Hekma — Coastal Landing';
$pageDescription = 'مدينة ساحلية بمعايير عالمية على ساحل البحر المتوسط — تجربة حياة وفرصة استثمارية واحدة.';

include __DIR__ . '/partials/head.php';
?>
<div class="reh">
  <?php include __DIR__ . '/partials/nav.php'; ?>
  <?php include __DIR__ . '/partials/hero.php'; ?>
  <?php include __DIR__ . '/partials/why-hekma.php'; ?>
  <?php include __DIR__ . '/partials/results.php'; ?>
  <?php include __DIR__ . '/partials/vision.php'; ?>
  <?php include __DIR__ . '/partials/lifestyle.php'; ?>
  <?php include __DIR__ . '/partials/gallery.php'; ?>
  <?php include __DIR__ . '/partials/units.php'; ?>
  <?php include __DIR__ . '/partials/investment.php'; ?>
  <div data-lead-form id="lead-form">
    <?php include __DIR__ . '/partials/final-cta.php'; ?>
  </div>
  <?php include __DIR__ . '/partials/footer.php'; ?>
</div>
<?php include __DIR__ . '/partials/foot.php'; ?>
