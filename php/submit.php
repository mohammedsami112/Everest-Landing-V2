<?php
/**
 * Lead form handler — the PHP-native counterpart of the client-side submit in
 * src/components/landing/lead-form.tsx, plus the real backend: sanitization,
 * Egyptian phone validation, PDO insert into `leads`, and Telegram alerts for
 * Nabd (ad_network = 'n') leads. On success it redirects to thank-you.php; on
 * any failure it stashes values (+ errors) in the session and bounces back to
 * the form, which re-renders them.
 */
require __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: ' . page('index.php'), true, 303);
    exit;
}

$values = [
    'name'          => sanitize_string(trim((string) ($_POST['name'] ?? ''))),
    'phone'         => sanitize_string(trim((string) ($_POST['phone'] ?? ''))),
    'time'          => sanitize_string(trim((string) ($_POST['time'] ?? ''))),
    'email'         => (string) filter_var(trim((string) ($_POST['email'] ?? '')), FILTER_SANITIZE_EMAIL),
    'interest'      => sanitize_string(trim((string) ($_POST['interest'] ?? 'cali coast'))),
    'ad_network'    => sanitize_string(trim((string) ($_POST['ad_network'] ?? ''))),
    'nabd_category' => sanitize_string(trim((string) ($_POST['nabd_category'] ?? ''))),
    'agent'         => sanitize_string(trim((string) ($_POST['agent'] ?? ''))),
];

$errors = [];
if ($values['name'] === '') {
    $errors['name'] = 'الاسم مطلوب';
}
if (invalid_EG_phone(normalize_eg_phone($values['phone']))) {
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

// ── Persist the lead ──────────────────────────────────────────────────────
// If the DB is unreachable (or the insert fails) we bounce back with the
// typed values preserved; the form re-render sees db() === null itself and
// shows the disabled state + problem message.
$pdo = db();
if ($pdo === null) {
    $_SESSION['lead_values'] = $values;
    header('Location: ' . page('index.php') . '#lead-form', true, 303);
    exit;
}

try {
    $stmt = $pdo->prepare(
        'INSERT INTO leads (lead_name, lead_phone, lead_email, interest, ad_network, nabd_category, suitable_time, agent)
         VALUES (?,?,?,?,?,?,?,?)'
    );
    $stmt->execute([
        $values['name'],
        $values['phone'],
        $values['email'],
        $values['interest'],
        $values['ad_network'],
        $values['nabd_category'],
        $values['time'],
        $values['agent'],
    ]);
} catch (PDOException) {
    $_SESSION['lead_values'] = $values;
    header('Location: ' . page('index.php') . '#lead-form', true, 303);
    exit;
}

// ── Telegram alerts — Nabd network leads only ─────────────────────────────
if ($values['ad_network'] === 'n') {
    require __DIR__ . '/inc/telegram.php';

    telegram_send(
        TELEGRAM_CHAT_NABD_ALL,
        "interest: {$values['interest']}\n\nCategory: {$values['nabd_category']}\n\nName: {$values['name']}\n\nPhone: {$values['phone']}\n\nEmail: {$values['email']}\n\ntime: {$values['time']}"
    );
    telegram_send(
        TELEGRAM_CHAT_NABD_COUNT,
        "interest: {$values['interest']}\n\nCategory: {$values['nabd_category']}\n\nName: {$values['name']}"
    );
}

header('Location: ' . page('thank-you.php'), true, 303);
exit;
