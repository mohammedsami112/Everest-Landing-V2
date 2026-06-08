<?php
/**
 * SVG icon set — 1:1 port of src/components/landing/icons.tsx.
 * Each entry holds the inner markup of the <svg>; icon() wraps it with the
 * shared IconBase attributes (viewBox 0 0 24 24, stroke=currentColor, round
 * caps). IconArrow keeps its own stroke width of 2 like the source.
 *
 * Usage: echo icon('arrow', 16, null, 'style="transform:scaleX(-1)"');
 */
declare(strict_types=1);

/** Inner path markup keyed by the React component name (minus the "Icon"). */
function icon_paths(): array
{
    return [
        'tree' =>
            '<path d="M12 3c-2.5 2-4 4-4 6 0 1.6 1 2.6 2.2 3M12 3c2.5 2 4 4 4 6 0 1.6-1 2.6-2.2 3" />'
            . '<path d="M7.5 9.5c-2 1.4-3 3-3 4.8 0 1.5 1 2.7 2.5 3M16.5 9.5c2 1.4 3 3 3 4.8 0 1.5-1 2.7-2.5 3" />'
            . '<path d="M9 16c-1.5 0-3 .8-3 2.2 0 1.5 1.8 2.3 6 2.3s6-.8 6-2.3c0-1.4-1.5-2.2-3-2.2" />'
            . '<path d="M12 13v8" />',
        'building' =>
            '<path d="M4 21V8l8-4 8 4v13" /><path d="M4 21h16" />'
            . '<path d="M9 12h.01M12 12h.01M15 12h.01M9 16h.01M12 16h.01M15 16h.01" />'
            . '<path d="M10 21v-4h4v4" />',
        'pin' =>
            '<path d="M12 21s-7-6.5-7-12a7 7 0 1 1 14 0c0 5.5-7 12-7 12z" />'
            . '<circle cx="12" cy="9" r="2.5" />',
        'leaf' =>
            '<path d="M4 20c0-8 5-13 16-14 0 9-5 14-12 14-2 0-4-1-4-3z" />'
            . '<path d="M4 20c5-6 9-8 12-9" />',
        'globe' =>
            '<circle cx="12" cy="12" r="9" />'
            . '<path d="M3 12h18M12 3c2.5 3 4 6.5 4 9s-1.5 6-4 9c-2.5-3-4-6.5-4-9s1.5-6 4-9z" />',
        'chart' =>
            '<path d="M3 21h18" /><path d="M6 17v-5M10 17v-9M14 17v-6M18 17v-11" />',
        'check' =>
            '<circle cx="12" cy="12" r="9" /><path d="M8 12.5l2.5 2.5L16 9.5" />',
        'award' =>
            '<circle cx="12" cy="9" r="5.5" /><path d="M8.5 13.5L7 21l5-3 5 3-1.5-7.5" />'
            . '<path d="M12 7v4M10 9h4" />',
        'headphones' =>
            '<path d="M4 15v-3a8 8 0 0 1 16 0v3" />'
            . '<path d="M4 15v3a2 2 0 0 0 2 2h1v-7H6a2 2 0 0 0-2 2zM20 15v3a2 2 0 0 1-2 2h-1v-7h1a2 2 0 0 1 2 2z" />',
        'shield' =>
            '<path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" />'
            . '<path d="M9 12l2 2 4-4" />',
        'arrow' =>
            '<path d="M5 12h14M13 6l6 6-6 6" />',
        'compass' =>
            '<circle cx="12" cy="12" r="9" /><path d="M12 3v2M12 19v2M3 12h2M19 12h2" />'
            . '<path d="M15 9l-1.5 4.5L9 15l1.5-4.5L15 9z" />',
        'phone' =>
            '<path d="M5 4h3l2 5-2 1a11 11 0 0 0 6 6l1-2 5 2v3a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2z" />',
        'mail' =>
            '<rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" />',
        'wa' =>
            '<path d="M4 20l1.5-4A8 8 0 1 1 9 19.5L4 20z" />'
            . '<path d="M9 10.5c.5 2 2 3.5 4 4l1.5-1.2 2.2 1c-.3 1.3-1.4 2-2.7 2-3 0-6-3-6-6 0-1.3.7-2.4 2-2.7l1 2.2L9 10.5z" />',
        'menu' =>
            '<path d="M4 7h16M4 12h16M4 17h10" />',
        'home' =>
            '<path d="M4 10.5 12 4l8 6.5" /><path d="M6 9.5V20h12V9.5" />'
            . '<path d="M10 20v-5h4v5" />',
        'bed' =>
            '<path d="M3 18v-6h14a2 2 0 0 1 2 2v4" /><path d="M3 12V7" />'
            . '<path d="M3 18v1.5M19 18v1.5" />'
            . '<path d="M7 12v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2" />',
        'star' =>
            '<path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17l-5.2 2.6 1-5.8-4.3-4.1 5.9-.9z" />',
        'sun' =>
            '<circle cx="12" cy="12" r="4" />'
            . '<path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19" />',
        'scale' =>
            '<path d="M12 3v18" /><path d="M5 7h14" /><path d="M7 7l-3 6a3 3 0 0 0 6 0z" />'
            . '<path d="M17 7l-3 6a3 3 0 0 0 6 0z" /><path d="M8 21h8" />',
        'waves' =>
            '<path d="M3 8c1.5-1.6 3-1.6 4.5 0s3 1.6 4.5 0 3-1.6 4.5 0 3 1.6 4.5 0" />'
            . '<path d="M3 13c1.5-1.6 3-1.6 4.5 0s3 1.6 4.5 0 3-1.6 4.5 0 3 1.6 4.5 0" />'
            . '<path d="M3 18c1.5-1.6 3-1.6 4.5 0s3 1.6 4.5 0 3-1.6 4.5 0 3 1.6 4.5 0" />',
        'anchor' =>
            '<circle cx="12" cy="5" r="3" /><path d="M12 22V8" />'
            . '<path d="M5 12H2a10 10 0 0 0 20 0h-3" />',
        'utensils' =>
            '<path d="M8 2v6a2 2 0 1 0 4 0V2" /><path d="M10 12v10" />'
            . '<path d="M17 2c-1.5 0-2.5 2.2-2.5 5s1 4 2.5 4V2z" /><path d="M17 11v11" />',
        'bag' =>
            '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />'
            . '<path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" />',
        'clock' =>
            '<circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />',
        'calendar' =>
            '<rect x="3" y="4.5" width="18" height="16" rx="2" />'
            . '<path d="M3 9h18M8 2.5v4M16 2.5v4" />',
        'wallet' =>
            '<path d="M21 8V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1" />'
            . '<path d="M21 8h-5a2 2 0 0 0 0 8h5V8z" />'
            . '<circle cx="16.5" cy="12" r="0.7" fill="currentColor" stroke="none" />',
        'key' =>
            '<circle cx="7.5" cy="15.5" r="4.5" /><path d="M10.7 12.3 20 3" />'
            . '<path d="M16 7l3 3M14 9l2 2" />',
    ];
}

/**
 * Echo-ready SVG string for an icon.
 *
 * @param string     $name   icon key, e.g. 'arrow', 'check', 'waves'
 * @param int        $size   width/height in px (default 24)
 * @param float|null $stroke stroke width; null = source default (1.6, or 2 for arrow)
 * @param string     $attrs  extra attributes on the <svg>, e.g. 'style="transform:scaleX(-1)"'
 */
function icon(string $name, int $size = 24, ?float $stroke = null, string $attrs = ''): string
{
    $paths = icon_paths();
    if (!isset($paths[$name])) {
        return '';
    }
    // IconArrow renders with a fixed stroke width of 2 in the source.
    $strokeWidth = $stroke ?? ($name === 'arrow' ? 2.0 : 1.6);
    $strokeStr = rtrim(rtrim(number_format($strokeWidth, 2, '.', ''), '0'), '.');
    $extra = $attrs !== '' ? ' ' . $attrs : '';

    return '<svg width="' . $size . '" height="' . $size . '" viewBox="0 0 24 24" '
        . 'fill="none" stroke="currentColor" stroke-width="' . $strokeStr . '" '
        . 'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"' . $extra . '>'
        . $paths[$name]
        . '</svg>';
}
