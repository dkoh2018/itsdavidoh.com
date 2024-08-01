import React from "react";
import Link from "next/link";
import WorkExperienceImages from "./workexperienceimg";
import VerticalLine from "./verticalline";

interface WorkExperienceItemProps {
  date: string;
  title: string;
  company: string;
  description: string[];
  link?: string;
  images?: string[];
}

const WorkExperienceItem: React.FC<WorkExperienceItemProps> = ({
  date,
  title,
  company,
  description,
  link,
  images,
}) => {
  return (
    <div className="mb-12 relative">
      {" "}
      {/* Changed mb-10 to mb-12 for consistency */}
      <div className="flex items-center mb-10">
        <div className="w-5/6 text-left pr-10 md:pr-4">
          <div className="pl-10">
            <span className="ml-auto text-sm md:text-base text-gray-500">
              {date}
            </span>
          </div>
        </div>

        <div className="w-4/6 ml-auto grid grid-cols-5">
          <div className="col-start-1 col-span-1 flex justify-center">
            <VerticalLine />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex-1"></div>
        <div className="w-5/6 ml-auto pl-2 md:pl-4">
          <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">
            {link ? (
              <Link href={link} className="hover:underline">
                {title} →
              </Link>
            ) : (
              title
            )}
          </h3>
          <p className="text-gray-600 mb-2 md:mb-4">{company}</p>
          {description.map((paragraph, index) => (
            <p key={index} className="mb-2 md:mb-4">
              {paragraph}
            </p>
          ))}
          <WorkExperienceImages images={images} />
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceItem;
