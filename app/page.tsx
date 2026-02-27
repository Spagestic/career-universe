// app/page.tsx
"use client";

import { useMemo, useState } from "react";
import { hierarchy, pack } from "d3-hierarchy";
import { careerData, type TreeNode } from "@/data/careers";
import CareerMap from "@/components/CareerMap";

const SIZE = 928;

export default function Page() {
  // Compute circle packing layout once
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
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#0f0f1a",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        fontFamily: "system-ui, sans-serif",
      }}
    >

      <CareerMap root={root} focus={focus} setFocus={setFocus} size={SIZE} />
    </div>
  );
}
