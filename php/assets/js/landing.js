/* ────────────────────────────────────────────────────────────────────────────
   Vanilla-JS port of the landing's client behaviour. Mirrors:
     • src/components/landing/use-reveal.ts          → reveal()
     • scrollToForm() in nav.tsx / hero.tsx          → wireScrollToForm()
     • src/components/landing/sections/gallery.tsx   → Lightbox
     • validate()/submit() in lead-form.tsx          → wireLeadForm()
   Keep these in sync with their React counterparts.
   ──────────────────────────────────────────────────────────────────────────── */
(function () {
  "use strict";

  /* ── Scroll reveal — adds `.in` to `.reveal` once it intersects ──────────── */
  function reveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    els.forEach(function (el) { io.observe(el); });
  }

  /* ── CTA buttons that scroll to the lead form ───────────────────────────── */
  function wireScrollToForm() {
    document.querySelectorAll("[data-scroll-to-form]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var el = document.querySelector("[data-lead-form]");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  /* ── Gallery lightbox ───────────────────────────────────────────────────── */
  function svg(inner, size) {
    return (
      '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" ' +
      'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" ' +
      'stroke-linejoin="round" aria-hidden="true">' + inner + "</svg>"
    );
  }
  var GLYPH = {
    // RTL: previous sits on the right (chevron points right), next on the left.
    chevronRight: function () { return svg('<path d="M9 6l6 6-6 6" />', 30); },
    chevronLeft: function () { return svg('<path d="M15 6l-6 6 6 6" />', 30); },
    close: function () { return svg('<path d="M6 6l12 12M18 6L6 18" />', 26); },
  };

  function Lightbox(tiles) {
    var items = Array.prototype.map.call(tiles, function (t) {
      return { kind: t.getAttribute("data-kind"), alt: t.getAttribute("data-alt"), src: t.getAttribute("data-src") };
    });
    var index = null;
    var overlay = null;
    var stage = null;
    var counter = null;
    var prevOverflow = "";

    function stageMarkup(it) {
      if (it.src) {
        return '<img class="reh-lb-img" src="' + it.src + '" alt="' + it.alt + '" />';
      }
      return '<span class="ph ' + it.kind + ' reh-lb-img" role="img" aria-label="' + it.alt + '"></span>';
    }

    function render() {
      var it = items[index];
      stage.innerHTML = stageMarkup(it);
      counter.textContent = index + 1 + " / " + items.length;
    }

    function go(delta) {
      if (index === null) return;
      index = (index + delta + items.length) % items.length;
      render();
    }

    function onKey(e) {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") go(1);   // RTL: left advances
      else if (e.key === "ArrowRight") go(-1);  // RTL: right goes back
    }

    function open(i) {
      index = i;
      overlay = document.createElement("div");
      overlay.className = "reh-lb";
      overlay.setAttribute("role", "dialog");
      overlay.setAttribute("aria-modal", "true");
      overlay.setAttribute("aria-label", "معرض الصور");
      overlay.innerHTML =
        '<button type="button" class="reh-lb-close" aria-label="إغلاق">' + GLYPH.close() + "</button>" +
        '<button type="button" class="reh-lb-nav reh-lb-prev" aria-label="الصورة السابقة">' + GLYPH.chevronRight() + "</button>" +
        '<figure class="reh-lb-stage"></figure>' +
        '<button type="button" class="reh-lb-nav reh-lb-next" aria-label="الصورة التالية">' + GLYPH.chevronLeft() + "</button>" +
        '<div class="reh-lb-counter mono"></div>';

      stage = overlay.querySelector(".reh-lb-stage");
      counter = overlay.querySelector(".reh-lb-counter");

      overlay.addEventListener("click", close);
      stage.addEventListener("click", function (e) { e.stopPropagation(); });
      overlay.querySelector(".reh-lb-close").addEventListener("click", function (e) { e.stopPropagation(); close(); });
      overlay.querySelector(".reh-lb-prev").addEventListener("click", function (e) { e.stopPropagation(); go(-1); });
      overlay.querySelector(".reh-lb-next").addEventListener("click", function (e) { e.stopPropagation(); go(1); });

      document.body.appendChild(overlay);
      render();

      prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
      overlay.querySelector(".reh-lb-close").focus();
    }

    function close() {
      if (!overlay) return;
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      overlay.remove();
      overlay = null;
      // Return focus to the tile that opened the lightbox.
      if (index !== null && tiles[index]) tiles[index].focus();
      index = null;
    }

    Array.prototype.forEach.call(tiles, function (tile, i) {
      tile.addEventListener("click", function () { open(i); });
    });
  }

  function wireGallery() {
    var grid = document.querySelector("[data-gallery]");
    if (!grid) return;
    var tiles = grid.querySelectorAll(".reh-gallery-tile");
    if (tiles.length) Lightbox(tiles);
  }

  /* ── Lead form: instant client-side validation + submitting state ───────── */
  function wireLeadForm() {
    var form = document.querySelector("[data-lead-form-el]");
    if (!form) return;

    function fieldOf(input) { return input.closest(".field"); }
    function setError(input, msg) {
      var field = fieldOf(input);
      if (!field) return;
      field.classList.toggle("invalid", !!msg);
      var err = field.querySelector(".err");
      if (err) err.textContent = msg || "";
    }

    function validate() {
      var name = form.elements["name"];
      var phone = form.elements["phone"];
      var email = form.elements["email"];
      var ok = true;

      if (!name.value.trim()) { setError(name, "الاسم مطلوب"); ok = false; }
      else setError(name, "");

      if (!/^[\d\s+()-]{7,}$/.test(phone.value)) { setError(phone, "رقم هاتف غير صالح"); ok = false; }
      else setError(phone, "");

      if (email.value.trim() && !/^\S+@\S+\.\S+$/.test(email.value)) { setError(email, "بريد إلكتروني غير صالح"); ok = false; }
      else setError(email, "");

      return ok;
    }

    var submitting = false;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (submitting) return;
      if (!validate()) return;

      submitting = true;
      var btn = form.querySelector("[data-submit-btn]");
      var label = form.querySelector("[data-submit-label]");
      var arrow = form.querySelector("[data-submit-icon]");
      if (label) label.textContent = "جارٍ الإرسال…";
      if (arrow) arrow.style.display = "none";
      if (btn) { btn.style.opacity = "0.75"; btn.style.cursor = "default"; }

      // Hand off to the native POST → submit.php (bypasses this listener).
      form.submit();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    reveal();
    wireScrollToForm();
    wireGallery();
    wireLeadForm();
  });
})();
