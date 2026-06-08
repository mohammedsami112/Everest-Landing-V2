<?php
/**
 * View helpers — counterpart of src/lib/asset.ts plus a couple of small
 * template utilities. Keep behaviour aligned with the React components.
 */
declare(strict_types=1);

/**
 * Resolve a public asset path. The Next.js source stores files in /public and
 * references them as "/logo.png"; here they live in php/assets/img, so the same
 * argument resolves to a relative "assets/img/logo.png" (plus BASE_PATH when
 * the app is deployed under a sub-path). Mirrors lib/asset.ts `asset()`.
 */
function asset(string $path): string
{
    $prefix = BASE_PATH === '' ? '' : rtrim(BASE_PATH, '/') . '/';
    return $prefix . 'assets/img' . $path;
}

/** Link to another page in this app, respecting BASE_PATH. */
function page(string $path): string
{
    $prefix = BASE_PATH === '' ? '' : rtrim(BASE_PATH, '/') . '/';
    return $prefix . ltrim($path, '/');
}

/** HTML-escape for echoing dynamic text into markup. */
function e(?string $value): string
{
    return htmlspecialchars((string) $value, ENT_QUOTES, 'UTF-8');
}

/**
 * Render a gradient image placeholder. Mirrors
 * src/components/landing/placeholder.tsx — `kind` selects the .ph gradient,
 * `label` is shown in the corner, and extra classes/inline styles pass through.
 */
function placeholder(string $kind, string $label, string $class = '', string $style = ''): string
{
    $styleAttr = $style !== '' ? ' style="' . e($style) . '"' : '';
    return '<div class="ph ' . e($kind) . ' ' . e($class) . '"' . $styleAttr . '>'
        . '<div class="ph-label">'
        . '<span>' . e($label) . '</span>'
        . '<span class="mono" style="opacity:.6">placeholder</span>'
        . '</div></div>';
}
