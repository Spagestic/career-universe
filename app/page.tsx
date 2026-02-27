// app/page.tsx
"use client";

import { useMemo, useState } from "react";
import { hierarchy, pack } from "d3-hierarchy";
import { careerData, type TreeNode } from "@/data";
import CareerMap from "@/components/career-map";
import { ThemeToggle } from "@/components/theme/theme-toggle";

const SIZE = 928;

export default function Page() {
  const root = useMemo(() => {
    const r = hierarchy(careerData)
      .sum((d) => d.value ?? 0)
      .sort((a, b) => (b.value ?? 0) - (a.value ?? 0));

    return pack<TreeNode>()
      .size([SIZE, SIZE])
      .padding((d) => [25, 14, 8, 4, 2][Math.min(d.depth, 4)])(r);
  }, []);

  const [focus, setFocus] = useState(root);

  return (
    // Replaced hardcoded inline styles with Tailwind theme variables
    <div className="w-full h-screen flex flex-col overflow-hidden bg-background text-foreground font-sans">
      <div className="absolute top-4 right-4 z-20">
        <ThemeToggle />
      </div>
      <CareerMap root={root} focus={focus} setFocus={setFocus} size={SIZE} />
    </div>
  );
}
