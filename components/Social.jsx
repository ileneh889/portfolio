import Link from "next/link"
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/ileneh889" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/yu-wen-huang-291080291/" },
];

export default function Social({ containerStyles, iconStyles }) {
  return (
    <div className={containerStyles}>
      {
        socials.map((social, index) => {
          return (
            <a
              href={social.path}
              key={index}
              className={iconStyles}
              target="_blank"
            >
              {social.icon}
            </a>
          );
        })
      }
    </div>
  )
}
