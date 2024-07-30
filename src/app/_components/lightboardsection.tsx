"use client";

import { useState, useEffect } from "react";
import { LightBoard, PatternCell } from "../ui/lightboard";

export default function LightBoardSection() {
  const [controlledDrawState, setControlledDrawState] =
    useState<PatternCell>("2");
  const [controlledHoverState, setControlledHoverState] =
    useState(true);

  useEffect(() => {
    console.log("LightBoardSection rendered");
  }, []);

  return (
    <section className="text-center mt-20 mb-16">
      <div className="w-full max-w-3xl mx-auto px-4">
        <div className="dark:bg-background mb-2">
          <LightBoard
            rows={12}
            lightSize={2}
            gap={2}
            text="WELCOME"
            font="default"
            disableDrawing={false}
            updateInterval={150}
            colors={{
              drawLine: "#000000",
            }}
            controlledDrawState={controlledDrawState}
            onDrawStateChange={setControlledDrawState}
            controlledHoverState={controlledHoverState}
            onHoverStateChange={setControlledHoverState}
          />
        </div>
      </div>
    </section>
  );
}
