"use client";
import React from "react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

interface AnimatedBackgroundProps {
  colors: number[][];
  containerClassName: string;
  dotSize?: number;
}

export function AnimatedBackground({ 
  colors, 
  containerClassName, 
  dotSize = 2 
}: AnimatedBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="h-full w-full absolute inset-0">
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName={containerClassName}
          colors={colors}
          dotSize={dotSize}
        />
      </div>
      <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
    </div>
  );
}