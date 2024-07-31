// VerticalLine.tsx
"use client";
import React from "react";
import PulsatingBubble from "./pulsatingbubble";

const VerticalLine: React.FC = () => {
  return (
    <div className="relative h-32 md:h-32 flex items-center justify-center">
      <div className="absolute w-px bg-gray-900 h-5/6"></div>
      {/* Top pulsating bubble */}
      <div className="absolute -top-2 flex items-center justify-center">
        <PulsatingBubble />
      </div>
      {/* Bottom pulsating bubble */}
      <div className="absolute -bottom-2 flex items-center justify-center">
        <PulsatingBubble />
      </div>
    </div>
  );
};

export default VerticalLine;
