"use client";

import { type ReactNode, useEffect } from "react";
import Lenis, { type LenisOptions } from "lenis";

type Props = { children: ReactNode };

export default function SmoothScrollProvider({ children }: Props) {
  useEffect(() => {
    const opts: LenisOptions = {
      duration: 1.1,
      smoothWheel: true,
    };

    const lenis = new Lenis(opts);

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
    lenis.destroy?.();
    };
  }, []);

  return <>{children}</>;
}
