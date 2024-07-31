import Image from "next/image";
import { FC } from "react";

// Import the SVG images
import envelopeIcon from "../img/emaillogo.svg";
import githubIcon from "../img/githublogo.svg";
import twitterIcon from "../img/twitterlogo.svg";
import linkedinIcon from "../img/linkedinlogo.svg";

const SocialMediaIcons: FC = () => {
  return (
    <div className="social-media-icons mb-10">
      <a
        href="https://www.linkedin.com/in/david-k-oh/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={linkedinIcon}
          alt="Linkedin"
          width={32}
          height={32}
        />
      </a>
      <a
        href="https://github.com/dkoh2018"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={githubIcon}
          alt="Github"
          width={32}
          height={32}
        />
      </a>
      <a
        href="https://twitter.com/0x_nietoh"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={twitterIcon}
          alt="Twitter"
          width={32}
          height={32}
        />
      </a>
      <a
        href="mailto:davidoh2018@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={envelopeIcon}
          alt="Email"
          width={32}
          height={32}
        />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
