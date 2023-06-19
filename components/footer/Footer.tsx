import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import logo from "./../../assets/logo.png";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Tooltip } from "react-tooltip";

const socialMenu = [
  {
    name: "Facebook",
    icon: <RiFacebookFill />,
    link: "https://www.facebook.com/sakilahmed009",
    id: "facebook",
  },
  {
    name: "Twitter",
    icon: <AiOutlineTwitter />,
    link: "https://twitter.com/MDSAKIL58063252",
    id: "twitter",
  },
  {
    name: "Linkedin",
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/sakil-ahmed007/",
    id: "linkedin",
  },
  {
    name: "Github",
    icon: <BsGithub />,
    link: "https://github.com/sakil-ahmed",
    id: "github",
  },
];

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer line">
      <div className="container">
        <div className="row">
          <div className="animate__animated footer__logo ">
            <a href="#header">
              <Image
                src={logo}
                alt="Footer Logo"
                priority={true}
                width={68}
                height={68}
              />
            </a>
          </div>
          <div className="footer__social__icons">
            {socialMenu.map(({ icon, id, link, name }) => {
              return (
                <div key={id}>
                  <a
                    data-tooltip-id={id}
                    data-tooltip-content={name}
                    href={link}
                    target="_blank"
                  >
                    {icon}
                  </a>
                  <Tooltip id={id} />
                </div>
              );
            })}
          </div>
          <div className="copyright__text">
            <p>{t("copyrighttext")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
