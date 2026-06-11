"use client";

import { useEffect, useRef } from "react";

export default function CursorDot() {
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = dot.current!;
    let x = 0, y = 0, tx = 0, ty = 0, raf = 0;

    const move = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      el.style.opacity = "1";
      const overLink = (e.target as HTMLElement).closest("a, button");
      el.style.width = el.style.height = overLink ? "44px" : "10px";
    };
    const loop = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={dot}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-50 h-[10px] w-[10px] rounded-full bg-plum opacity-0 mix-blend-difference transition-[width,height] duration-300"
    />
  );
}