"use client";
import { useEffect, useRef } from "react";

export default function LiveCodeWallpaper() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const resize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; init(); };
    window.addEventListener("resize", resize);

    const glyphs = "01{}[]()<>=+-/*;&|^%!$#@".split("");
    const columns = Math.floor(w / 18);
    let drops: number[] = new Array(columns).fill(0);

    function init() {
      drops = new Array(Math.floor(w / 18)).fill(0);
    }

    const draw = () => {

      ctx.fillStyle = "rgba(0,0,0,0.06)";
      ctx.fillRect(0, 0, w, h);

      const isDark = document.documentElement.classList.contains("dark");
      ctx.fillStyle = isDark ? "#22c55e" : "#0ea5e9"; // green in dark, cyan in light
      ctx.font = "16px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = glyphs[Math.floor(Math.random() * glyphs.length)];
        ctx.fillText(text, i * 18, drops[i] * 18);
        if (drops[i] * 18 > h && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
      req = requestAnimationFrame(draw);
    };


const isDark = document.documentElement.classList.contains("dark");
ctx.fillStyle = isDark ? "#020617" : "#ffffff";
ctx.fillRect(0, 0, w, h);


    let req = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(req); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 opacity-[0.25] dark:opacity-[0.35] pointer-events-none"
      aria-hidden
    />
  );
}
