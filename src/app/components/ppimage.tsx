import React from "react";
import Image from "next/image";

const PPImage = () => {
  return (
    <div style={{ position: "absolute", top: "60px", left: "60px" }}>
      <Image
        src="/images/ppimage.svg"
        alt="DKO"
        width={269}
        height={269}
      />
    </div>
  );
};

export default PPImage;
