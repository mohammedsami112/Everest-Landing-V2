<?php
/**
 * Lead form handler — the PHP-native counterpart of the client-side submit in
 * src/components/landing/lead-form.tsx. Validation rules mirror that file's
 * validate() exactly. On success it redirects to thank-you.php (the React
 * version routes to /thank-you); on failure it stashes values + errors in the
 * session and bounces back to the form, which re-renders them.
 */
require __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: ' . page('index.php'), true, 303);
    exit;
}

$values = [
    'name'  => trim((string) ($_POST['name'] ?? '')),
    'phone' => trim((string) ($_POST['phone'] ?? '')),
    'time'  => trim((string) ($_POST['time'] ?? '')),
    'email' => trim((string) ($_POST['email'] ?? '')),
];

$errors = [];
if ($values['name'] === '') {
    $errors['name'] = 'الاسم مطلوب';
}
if (!preg_match('/^[\d\s+()\-]{7,}$/', $values['phone'])) {
    $errors['phone'] = 'رقم هاتف غير صالح';
}
if ($values['email'] !== '' && !preg_match('/^\S+@\S+\.\S+$/', $values['email'])) {
    $errors['email'] = 'بريد إلكتروني غير صالح';
}

if ($errors) {
    $_SESSION['lead_values'] = $values;
    $_SESSION['lead_errors'] = $errors;
    header('Location: ' . page('index.php') . '#lead-form', true, 303);
    exit;
}

// ── Valid submission ──────────────────────────────────────────────────────
// This is where a real backend would persist the lead: DB insert, email to
// sales, or a CRM webhook. The Next.js version has no backend either — it just
// advances to the thank-you page. Add persistence for $values here when ready.

header('Location: ' . page('thank-you.php'), true, 303);
exit;
