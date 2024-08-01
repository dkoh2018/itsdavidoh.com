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
    <div className="mb-12 px-6 py-2">
      {" "}
      {/* Changed mb-30 to mb-12 for consistency */}
      <div className="w-full">
        <h3 className="text-xl font-semibold mb-4">
          {link ? (
            <Link href={link} className="hover:underline">
              {title} →
            </Link>
          ) : (
            title
          )}
        </h3>
        <div>
          {description.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMeItem;
