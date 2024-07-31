import React from "react";
import Link from "next/link";
import WorkExperienceImages from "./workexperienceimg";

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
    <div className="mb-12 flex">
      <div className="w-1/4 pr-4">
        <span className="text-gray-500">{date}</span>
      </div>
      <div className="w-3/4">
        <h3 className="text-xl font-semibold mb-2">
          {link ? (
            <Link href={link} className="hover:underline">
              {title} →
            </Link>
          ) : (
            title
          )}
        </h3>
        <p className="text-gray-600 mb-4">{company}</p>
        {description.map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
        <WorkExperienceImages images={images} />
      </div>
    </div>
  );
};

export default WorkExperienceItem;
