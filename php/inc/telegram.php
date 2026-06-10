<?php
/**
 * Telegram notifications for new leads. Only loaded by submit.php on the
 * success path, and only used when the lead arrived with ad_network = 'n'
 * (the Nabd network). Bot token and chat ids come from php/.env (see
 * .env.example), loaded by config.php.
 */
declare(strict_types=1);

define('TELEGRAM_CHAT_NABD_ALL', (int) env('TELEGRAM_CHAT_NABD_ALL', '0'));   // full lead details
define('TELEGRAM_CHAT_NABD_COUNT', (int) env('TELEGRAM_CHAT_NABD_COUNT', '0')); // count channel: name only

/**
 * Fire-and-forget sendMessage. The result is intentionally ignored — a
 * Telegram outage must never block the thank-you redirect.
 */
function telegram_send(int $chatId, string $text): void
{
    $token = env('TELEGRAM_BOT_TOKEN');
    if ($token === null || $chatId === 0) {
        return; // unconfigured .env — skip silently, like a failed send
    }

    $payload = json_encode(['chat_id' => $chatId, 'text' => $text]);

    $ch = curl_init();
    curl_setopt_array($ch, [
        CURLOPT_URL => 'https://api.telegram.org/bot' . $token . '/sendMessage',
        CURLOPT_POST => true,
        CURLOPT_HTTPHEADER => ['content-type: application/json'],
        CURLOPT_POSTFIELDS => $payload,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CONNECTTIMEOUT => 3,
        CURLOPT_TIMEOUT => 5,
    ]);
    curl_exec($ch);
    curl_close($ch);
}
