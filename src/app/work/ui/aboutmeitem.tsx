import React from "react";
import Link from "next/link";

interface AboutMeItemProps {
  title: string;
  description: string[];
  link?: string;
  images?: string[];
}

const AboutMeItem: React.FC<AboutMeItemProps> = ({
  title,
  description,
  link,
  images,
}) => {
  return (
    <div className="mb-12 flex">
      <div className="w-1/4 pr-4"></div>
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
        {description.map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AboutMeItem;
