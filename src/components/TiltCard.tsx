"use client";
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

export default function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  // Tell TS this div can have a custom property called vanillaTilt
  const ref = useRef<HTMLDivElement & { vanillaTilt?: any }>(null);

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

    // clean up on unmount
    return () => {
      node.vanillaTilt?.destroy();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
    >
      {children}
    </div>
  );
}
