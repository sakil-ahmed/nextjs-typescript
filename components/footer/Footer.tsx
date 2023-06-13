import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import logo from "./../../assets/logo.png";
import Image from "next/image";
import { useTranslation } from "react-i18next";
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
            <a href="https://www.facebook.com/sakilahmed009" target="_blank">
              <RiFacebookFill />
            </a>
            <a href="https://twitter.com/MDSAKIL58063252" target="_blank">
              <AiOutlineTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/sakil-ahmed007/"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/sakil-ahmed" target="_blank">
              <BsGithub />
            </a>
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
