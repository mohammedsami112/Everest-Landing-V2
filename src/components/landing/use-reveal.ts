"use client";

import { useEffect, type RefObject } from "react";

/**
 * Adds `.in` to descendants with `.reveal` once they intersect the viewport.
 * Intensity is driven from CSS (--reveal multiplier); this hook just flips
 * the class — the animation runs from globals.css.
 */
export function useReveal(root: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const r = root.current;
    if (!r) return;
    const els = r.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [root]);
}
