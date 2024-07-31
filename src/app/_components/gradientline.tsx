import React from "react";

const GradientLine: React.FC = () => (
  <div className="w-full max-w-4xl mx-auto mt-2 mb-6 px-4">
    <div className="h-px bg-gradient-to-r from-gray-200 via-gray-200 to-gray-900" />
  </div>
);

export default GradientLine;
