<?php
/**
 * Shared bootstrap for every PHP entry point (index.php, thank-you.php,
 * submit.php). Mirrors the role of next.config.ts + src/lib/asset.ts.
 */
declare(strict_types=1);

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

/**
 * Base URL prefix for the whole app. Leave '' when the site is served from the
 * web root. If you deploy the php/ folder under a sub-path (e.g. GitHub-Pages
 * style /Everest-Landing-V2/php), set this to that prefix WITHOUT a trailing
 * slash. Counterpart of next.config.ts `basePath`.
 */
const BASE_PATH = '';

require __DIR__ . '/inc/env.php';
env_load(__DIR__ . '/.env');

require __DIR__ . '/inc/helpers.php';
require __DIR__ . '/inc/icons.php';
require __DIR__ . '/inc/validation.php';
require __DIR__ . '/inc/db.php';
