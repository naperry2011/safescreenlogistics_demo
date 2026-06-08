"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

/**
 * A soft droplet that lags behind the pointer, with a ripple on click.
 * Desktop / fine-pointer only — hidden on touch and under reduced-motion
 * (both via CSS in globals.css and the early return below).
 */
export function DropletCursor() {
  const reduce = useReducedMotion();
  const dotRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduce) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;

    const pos = { x: -100, y: -100 };
    const target = { x: -100, y: -100 };
    let raf = 0;
    let running = false;
    let lastX = NaN;
    let lastY = NaN;

    const stop = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      running = false;
    };

    // Lerp only while the dot is catching up to the pointer. Once it converges
    // we stop the loop entirely (no perpetual idle rAF / style writes); the
    // next pointermove restarts it.
    const tick = () => {
      pos.x += (target.x - pos.x) * 0.18;
      pos.y += (target.y - pos.y) * 0.18;
      if (Math.abs(target.x - pos.x) < 0.5 && Math.abs(target.y - pos.y) < 0.5) {
        pos.x = target.x;
        pos.y = target.y;
      }
      const rx = Math.round(pos.x);
      const ry = Math.round(pos.y);
      if (dotRef.current && (rx !== lastX || ry !== lastY)) {
        dotRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
        lastX = rx;
        lastY = ry;
      }
      if (pos.x === target.x && pos.y === target.y) {
        running = false;
        raf = 0;
        return;
      }
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (!running && !document.hidden) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      start();
    };
    const onClick = (e: PointerEvent) => {
      const root = rootRef.current;
      if (!root) return;
      const r = document.createElement("span");
      r.className = "droplet-ripple pointer-events-none fixed z-[60] size-8 rounded-full";
      r.style.left = `${e.clientX}px`;
      r.style.top = `${e.clientY}px`;
      r.style.border = "1.5px solid var(--mint-500)";
      root.appendChild(r);
      window.setTimeout(() => r.remove(), 650);
    };
    const onVisibility = () => {
      if (document.hidden) stop();
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerdown", onClick);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      stop();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onClick);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reduce]);

  if (reduce) return null;

  return (
    <div ref={rootRef} className="droplet-cursor-root" aria-hidden>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[60] size-6 rounded-full mix-blend-multiply"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, rgba(123,220,207,0.9), rgba(26,174,159,0.35) 70%, transparent)",
        }}
      />
    </div>
  );
}
