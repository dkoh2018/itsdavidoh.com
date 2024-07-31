import React from "react";
import Image from "next/image";

interface WorkExperienceImagesProps {
  images?: string[];
}

const WorkExperienceImages: React.FC<WorkExperienceImagesProps> = ({
  images,
}) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="flex space-x-4 mt-4">
      {images.map((src, index) => (
        <div key={index} className="w-1/3">
          <Image
            src={src}
            alt={`Project image ${index + 1}`}
            width={300}
            height={200}
            className="rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default WorkExperienceImages;
