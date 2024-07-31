import React from "react";
import { WorkExperience } from "./workexperience";

interface TimelineItemProps extends WorkExperience {
  isLeft: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  company,
  date,
  description,
  isLeft,
}) => {
  return (
    <div className="mb-8 md:mb-12 flex flex-col md:flex-row justify-between items-center w-full relative">
      <div
        className={`w-full md:w-5/12 ${
          isLeft ? "md:mr-auto" : "md:ml-auto"
        } relative z-20`}
      >
        <div className="p-4 md:p-6 bg-pearl rounded-lg shadow-lg relative z-20">
          <h3 className="mb-2 font-bold text-gray-900 text-xl md:text-2xl leading-tight">
            {title}
          </h3>
          <p className="text-base md:text-lg font-semibold text-gray-800 mb-1">
            {company}
          </p>
          <p className="text-xs md:text-sm font-medium text-gray-600 mb-3 md:mb-4 tracking-wide">
            {date}
          </p>
          <ul className="list-disc mt-2 md:mt-3 ml-4 md:ml-5 space-y-1 md:space-y-2">
            {description.map((item, index) => (
              <li
                key={index}
                className="text-sm md:text-base text-gray-700 leading-relaxed"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Connecting line*/}
      <div
        className={`hidden md:block absolute top-1/2 ${
          isLeft ? "left-0" : "right-0"
        } w-[calc(50%-0.25rem)] h-0.5 z-10`}
        style={{ transform: "translateY(-50%)" }}
      >
        <div
          className={`w-full h-full bg-gradient-to-r ${
            isLeft
              ? "from-transparent via-transparent to-gray-300"
              : "from-gray-300 via-transparent to-transparent"
          }`}
          style={{
            maskImage: isLeft
              ? "linear-gradient(to right, transparent, black 400%, black)"
              : "linear-gradient(to left, transparent, black 400%, black)",
            WebkitMaskImage: isLeft
              ? "linear-gradient(to right, transparent, black 400%, black)"
              : "linear-gradient(to left, transparent, black 400%, black)",
          }}
        ></div>
      </div>

      {/* Center dot*/}
      <div
        className="hidden md:block absolute left-1/2 top-1/2 w-4 md:w-5 h-4 md:h-5 bg-gray-300 rounded-full z-30 border-4 border-white"
        style={{ transform: "translate(-50%, -50%)" }}
      ></div>
    </div>
  );
};

export default TimelineItem;
