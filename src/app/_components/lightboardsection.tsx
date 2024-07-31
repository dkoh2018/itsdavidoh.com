"use client";

import { useState, useEffect, useCallback } from "react";
import { LightBoard, PatternCell } from "./ui/lightboard";

export function LightBoardSection() {
  const [controlledDrawState, setControlledDrawState] =
    useState<PatternCell>("2");
  const [controlledHoverState, setControlledHoverState] =
    useState(false);

  const cycleDrawState = () => {
    setControlledDrawState((prev) => {
      switch (prev) {
        case "0":
          return "1";
        case "1":
          return "2";
        case "2":
          return "3";
        case "3":
          return "0";
        default:
          return "0";
      }
    });
  };

  return (
    <section className="text-center mb-8">
      <div className="w-full max-w-3xl mx-auto px-4">
        <div
          className="dark:bg-background mb-2"
          style={{ marginTop: "16px" }}
        >
          <LightBoard
            text="WELCOME"
            rows={17}
            gap={1}
            lightSize={4}
            font="default"
            updateInterval={500}
            colors={{
              background: "#1a1a1a",
              textDim: "#3a3a3a",
              drawLine: "#7a7a7a",
              textBright: "#ffffff",
            }}
            controlledDrawState={controlledDrawState}
            controlledHoverState={controlledHoverState}
            onDrawStateChange={setControlledDrawState}
            onHoverStateChange={setControlledHoverState}
            disableDrawing={false}
          />
        </div>
      </div>
    </section>
  );
}
