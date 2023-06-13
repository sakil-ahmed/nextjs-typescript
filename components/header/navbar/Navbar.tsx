import React from "react";
import Link from "next/link";
import {useTranslation} from "react-i18next";

const Navbar = ({ setIsMenuOpen }: any) => {
  const {t} = useTranslation()
  
  return (
    <ul className="nav__menu__items">
      <li onClick={() => setIsMenuOpen(false)}>
        <Link href={"/"}>{t("home")}</Link>
      </li>
      {/* <li onClick={() => setIsMenuOpen(false)}>
        <a href={"#about"}>About</a>
      </li> */}
      <li onClick={() => setIsMenuOpen(false)}>
        <a href={"#skills"}>{t("skills")}</a>
      </li>
      {/* <li onClick={() => setIsMenuOpen(false)}>
        <a href={"#service"}>Service</a>
      </li> */}
      <li onClick={() => setIsMenuOpen(false)}>
        <a href={"#portfolio"}>{t("portfolio")}</a>
      </li>
      <li onClick={() => setIsMenuOpen(false)}>
        <a href={"#contact"}>{t("contact")}</a>
      </li>
    </ul>
  );
};

export default Navbar;
