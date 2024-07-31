import React from "react";

const HorizontalLine: React.FC = () => {
  return (
    <div className="w-full my-8 px-4 mb-16">
      <div className="relative h-0.5">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-400 to-gray-100"></div>
      </div>
    </div>
  );
};

export default HorizontalLine;
