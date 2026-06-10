<?php
/**
 * Input sanitization + phone validation for the lead form (submit.php and the
 * hidden tracking inputs in partials/lead-form.php). The Egyptian phone rule
 * is also mirrored client-side in wireLeadForm() (assets/js/landing.js) — keep
 * the two in sync.
 */
declare(strict_types=1);

/**
 * Modern equivalent of the deprecated FILTER_SANITIZE_STRING (default flags):
 * strips null bytes and tags, encodes single/double quotes. Idempotent, so
 * re-sanitizing an already-sanitized value is harmless.
 */
function sanitize_string(string $value): string
{
    $value = (string) preg_replace('/\x00|<[^>]*>?/', '', $value);
    return str_replace(["'", '"'], ['&#39;', '&#34;'], $value);
}

/**
 * Strip the separators the phone placeholder "01x xxx xxxx" invites (spaces,
 * dashes, parens) before validating. `+` is intentionally kept, so +20...
 * numbers fail validation — only local 01x numbers are accepted.
 */
function normalize_eg_phone(string $phone): string
{
    return (string) preg_replace('/[\s()\-]/', '', $phone);
}

/**
 * True when $phone is NOT a valid Egyptian mobile number: it must be exactly
 * 11 digits starting 010 / 011 / 012 / 015. Call with the normalized string.
 */
function invalid_EG_phone(string $phone): bool
{
    return preg_match('/^01[0125]\d{8}$/', $phone) !== 1;
}
