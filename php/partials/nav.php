<?php
/**
 * Sticky top bar — mirrors src/components/landing/sections/nav.tsx
 * (and the embedded src/components/landing/logo.tsx).
 * The nav keeps the dark/charcoal palette regardless of the section it overlays.
 * The CTA button scrolls to the lead form (see [data-scroll-to-form] in landing.js).
 */
?>
<header class="nav" style="background:rgba(11,13,17,.85);border-bottom:1px solid rgba(255,255,255,.08);color:#f0e9da">
  <div class="reh-nav-row" style="display:flex;align-items:center;justify-content:space-between;padding:14px 48px;max-width:1280px;margin:0 auto">
    <!-- Logo (logo.tsx): render at 80px but reserve 56px of layout height via negative margin-block. -->
    <a href="#" aria-label="Ras El Hekma" style="display:inline-flex;align-items:center;color:var(--on-deep);text-decoration:none">
      <img src="<?= e(asset('/logo.png')) ?>" alt="Ras El Hekma" style="height:80px;width:auto;display:block;margin-block:-12px" />
    </a>
    <button class="btn btn-primary reh-nav-cta-btn" data-scroll-to-form style="height:42px;padding:0 18px;font-size:14px;border-radius:var(--radius-sm)">
      احجز استشارة
    </button>
  </div>
</header>
