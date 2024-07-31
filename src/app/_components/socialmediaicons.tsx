import Image from "next/image";
import { FC } from "react";

// Import the image
import envelopeIcon from "../img/emaillogo.png";
import githubIcon from "../img/githublogo.png";
import twitterIcon from "../img/twitterlogo.png";
import linkedinIcon from "../img/linkedinlogo.png";

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
