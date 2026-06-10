<?php
/**
 * Database connection (PDO/MySQL) — replaces the legacy mysqli DBC.php.
 * partials/lead-form.php calls db() to decide whether to render the form
 * enabled; submit.php calls it to persist the lead. Connection failures are
 * swallowed (db() returns null) so the page still renders — the form shows a
 * "temporary problem" message and disables itself instead.
 */
declare(strict_types=1);

const DB_HOST = 'localhost';
const DB_NAME = '8xtest';
const DB_USER = '8xtest_usr';
const DB_PASS = '.ed\A}X8U_,Vo/[-';

/** Memoized PDO connection for this request; null when MySQL is unreachable. */
function db(): ?PDO
{
    static $pdo = null;
    static $failed = false;

    if ($pdo !== null || $failed) {
        return $pdo;
    }

    try {
        $pdo = new PDO(
            'mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8',
            DB_USER,
            DB_PASS,
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
