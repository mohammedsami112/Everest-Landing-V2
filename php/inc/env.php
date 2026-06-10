<?php
/**
 * Minimal .env loader — no framework, no build step, in keeping with the rest
 * of the PHP mirror. config.php loads php/.env once at bootstrap; secrets
 * (DB credentials, Telegram bot token/chat ids) are read via env() and never
 * committed — see php/.env.example for the expected keys.
 */
declare(strict_types=1);

/** Parse a .env file into the shared store. Lines: KEY=value, # comments. */
function env_load(string $path): void
{
    if (!is_readable($path)) {
        return; // missing .env is handled where the values are used (db() etc.)
    }
    foreach (file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $line) {
        $line = trim($line);
        if ($line === '' || $line[0] === '#' || !str_contains($line, '=')) {
            continue;
        }
        [$key, $value] = explode('=', $line, 2);
        $key = trim($key);
        $value = trim($value);
        // Optional surrounding quotes; otherwise the value is taken literally.
        if (strlen($value) >= 2 && ($value[0] === '"' || $value[0] === "'") && $value[-1] === $value[0]) {
            $value = substr($value, 1, -1);
        }
        $GLOBALS['__env'][$key] = $value;
    }
}

/** Read a value loaded by env_load(), falling back to $default. */
function env(string $key, ?string $default = null): ?string
{
    return $GLOBALS['__env'][$key] ?? $default;
}
