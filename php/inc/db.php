<?php
/**
 * Database connection (PDO/MySQL) — replaces the legacy mysqli DBC.php.
 * Credentials come from php/.env (see .env.example), loaded by config.php.
 * partials/lead-form.php calls db() to decide whether to render the form
 * enabled; submit.php calls it to persist the lead. Connection failures are
 * swallowed (db() returns null) so the page still renders — the form shows a
 * "temporary problem" message and disables itself instead.
 */
declare(strict_types=1);

/** Memoized PDO connection for this request; null when MySQL is unreachable. */
function db(): ?PDO
{
    static $pdo = null;
    static $failed = false;

    if ($pdo !== null || $failed) {
        return $pdo;
    }

    $host = env('DB_HOST');
    $name = env('DB_NAME');
    if ($host === null || $name === null) {
        $failed = true; // missing/incomplete .env counts as "DB unavailable"
        return null;
    }

    try {
        $pdo = new PDO(
            "mysql:host={$host};dbname={$name};charset=utf8",
            env('DB_USER', ''),
            env('DB_PASS', ''),
            [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_TIMEOUT => 3, // a down DB must not hang page render
            ]
        );
    } catch (PDOException) {
        $failed = true;
    }

    return $pdo;
}
