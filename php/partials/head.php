<?php
/**
 * Document shell — mirrors src/app/layout.tsx (html/head/body open + fonts).
 * Expects before include:
 *   $pageTitle       string
 *   $pageDescription string
 *   $noindex         bool  (optional) — emits robots noindex,nofollow
 */
$noindex = $noindex ?? false;
?>
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <title><?= e($pageTitle) ?></title>
  <meta name="description" content="<?= e($pageDescription) ?>" />
<?php if ($noindex): ?>
  <meta name="robots" content="noindex, nofollow" />
<?php endif; ?>
  <link rel="icon" href="<?= e(asset('/favicon.ico')) ?>" sizes="any" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&family=Tajawal:wght@300;400;500;700;800&family=Almarai:wght@300;400;700;800&family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600;700&family=IBM+Plex+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400;500&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="<?= e(page('assets/css/styles.css')) ?>" />
</head>
<body>
