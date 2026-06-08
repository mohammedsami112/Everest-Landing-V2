# Ras El Hekma — PHP version

A self-contained PHP port of the Next.js landing page in `../src`. Same design,
colors, images, copy, placeholders, sections, gallery lightbox, scroll-reveal,
and lead form — no framework, no build step. Drop it on any PHP host and it runs.

## Run locally

```bash
# from the repo root
php -S 127.0.0.1:8000 -t php
# open http://127.0.0.1:8000/index.php
```

Requires PHP 7.4+ (developed against PHP 8.4).

## Layout

```
php/
├─ index.php           # home page (mirrors page.tsx + landing.tsx)
├─ thank-you.php       # post-submit page (mirrors app/thank-you/page.tsx)
├─ submit.php          # lead-form POST handler → validates, redirects
├─ config.php          # bootstrap: session + BASE_PATH + includes
├─ inc/
│  ├─ helpers.php      # asset(), page(), e(), placeholder()
│  └─ icons.php        # icon('<name>', size, stroke, attrs) — port of icons.tsx
├─ partials/
│  ├─ head.php / foot.php          # document shell (mirrors layout.tsx)
│  ├─ nav, hero, why-hekma, results, vision, lifestyle,
│  │  gallery, units, investment, final-cta, footer .php   # one per section
│  └─ lead-form.php                # the form (included by final-cta.php)
└─ assets/
   ├─ css/styles.css   # reset + verbatim copy of globals.css custom styles
   ├─ js/landing.js    # reveal, scroll-to-form, gallery lightbox, form validation
   └─ img/             # the site images
```

## Deploying under a sub-path

If the app is not served from the web root (e.g. `https://host/landing/php/`),
set `BASE_PATH` in `config.php` to that prefix (no trailing slash).

## ⚠️ This is a mirror — keep it in sync

The **Next.js app in `../src` is the source of truth.** Every design/content
change made there must be reflected here in the same change. See the
**"Two implementations — keep the PHP mirror in sync"** section in `../AGENTS.md`
for the full source → mirror map and translation rules.
