<?php
/**
 * Telegram notifications for new leads. Only loaded by submit.php on the
 * success path, and only used when the lead arrived with ad_network = 'n'
 * (the Nabd network).
 */
declare(strict_types=1);

const TELEGRAM_BOT_TOKEN = '6737596189:AAGZ-YMVrcZC4-lfHIQeQkFNCTHi3_Gcj9E';
const TELEGRAM_CHAT_NABD_ALL = -1002160532939;   // full lead details
const TELEGRAM_CHAT_NABD_COUNT = -1002171522374; // count channel: name only

/**
 * Fire-and-forget sendMessage. The result is intentionally ignored — a
 * Telegram outage must never block the thank-you redirect.
 */
function telegram_send(int $chatId, string $text): void
{
    $payload = json_encode(['chat_id' => $chatId, 'text' => $text]);

    $ch = curl_init();
    curl_setopt_array($ch, [
        CURLOPT_URL => 'https://api.telegram.org/bot' . TELEGRAM_BOT_TOKEN . '/sendMessage',
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
