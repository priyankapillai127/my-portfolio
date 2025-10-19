"use client";

import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

type VanillaTiltInstance = { destroy: () => void };
type TiltDiv = HTMLDivElement & { vanillaTilt?: VanillaTiltInstance };

export default function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<TiltDiv | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    VanillaTilt.init(node, {
      max: 8,
      speed: 400,
      glare: true,
      "max-glare": 0.15,
      scale: 1.02,
    });

    return () => {
      node.vanillaTilt?.destroy();
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
