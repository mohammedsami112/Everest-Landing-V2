<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:php-mirror-rules -->
# Two implementations — keep the PHP mirror in sync

This repo ships the **same landing page twice**:

- **`src/`** — the Next.js app. **This is the source of truth.** All new design
  and content work happens here first.
- **`php/`** — a hand-written, self-contained PHP mirror (plain PHP + CSS + vanilla
  JS, no build step, no framework). It exists so the site can be deployed on any
  PHP host and must look and behave **identically** to the Next.js version.

## The rule (do this every time, no exceptions)

**Any change to the Next.js version MUST be reflected in the PHP version in the
same change.** If you edit a section's copy, colors, spacing, icons, images,
layout, validation, or page structure under `src/`, update the matching `php/`
file(s) before you consider the task done. Treat a change that touches only one
side as incomplete. When you finish, state in your summary that both versions
were updated (or explicitly why the PHP side needed no change).

This applies to content/markup/style/behaviour parity. It does NOT mean copying
Next.js/React internals (hooks, RSC, build config) — the PHP side reproduces the
*rendered result*, not the framework machinery.

## Source → mirror map

| Next.js source | PHP mirror |
| --- | --- |
| `src/app/globals.css` | `php/assets/css/styles.css` — everything from `:root {` down is a **verbatim copy**; paste CSS changes across unchanged. Only the top reset differs (Tailwind imports → plain reset). |
| `src/app/layout.tsx` (html/head/fonts) | `php/partials/head.php` + `php/partials/foot.php` |
| `src/app/page.tsx` + `components/landing/landing.tsx` | `php/index.php` (section include order matches `landing.tsx`) |
| `src/app/thank-you/page.tsx` | `php/thank-you.php` |
| `src/components/landing/sections/<name>.tsx` | `php/partials/<name>.php` (same basename) |
| `src/components/landing/lead-form.tsx` | `php/partials/lead-form.php` (markup) + `php/submit.php` (server validation/redirect) + `wireLeadForm()` in `php/assets/js/landing.js` (client validation) |
| `src/components/landing/icons.tsx` | `php/inc/icons.php` (`icon('<name>', size, stroke, attrs)`) |
| `src/components/landing/logo.tsx` | inlined in `php/partials/nav.php` |
| `src/components/landing/placeholder.tsx` | `placeholder()` in `php/inc/helpers.php` |
| `src/components/landing/use-reveal.ts` | `reveal()` in `php/assets/js/landing.js` |
| `src/lib/asset.ts` | `asset()` / `page()` in `php/inc/helpers.php` |
| `public/*.{jpeg,jpg,png,ico}` | `php/assets/img/*` (copy the file across) |

## Translating React → PHP

- JSX inline `style={{ camelCase: 28 }}` → HTML `style="kebab-case:28px"` (bare
  numbers get `px` except unitless props: `line-height`, `opacity`, `z-index`,
  `font-weight`, `flex`). Keep the same property order so files stay diffable.
- `.map(...)` lists → a PHP `$array` + `foreach`. Keep the data arrays at the top
  of the partial, mirroring the component's arrays.
- React `onMouseEnter/onMouseLeave` hover handlers are ported to CSS `:hover`
  rules in `styles.css` (see the `.reh-why-card` / `.reh-results-item` /
  `.reh-units-card` block). Update those if the React hover values change.
- All dynamic text echoed into markup goes through `e()` (HTML-escape).

## Running the PHP version

```bash
php -S 127.0.0.1:8000 -t php      # then open http://127.0.0.1:8000/index.php
```

After mirroring a change, `php -l` the touched files and (ideally) eyeball both
versions side by side before finishing.
<!-- END:php-mirror-rules -->
