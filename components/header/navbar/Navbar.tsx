import React from "react";
import Link from "next/link";

const Navbar = ({ setIsMenuOpen }: any) => {
  return (
    <ul className="nav__menu__items">
      <li onClick={() => setIsMenuOpen(false)}>
        <Link href={"/"}>Home</Link>
      </li>
      {/* <li onClick={() => setIsMenuOpen(false)}>
        <a href={"#about"}>About</a>
      </li> */}
      <li onClick={() => setIsMenuOpen(false)}>
        <a href={"#skills"}>Skills</a>
      </li>
      {/* <li onClick={() => setIsMenuOpen(false)}>
        <a href={"#service"}>Service</a>
      </li> */}
      <li onClick={() => setIsMenuOpen(false)}>
        <a href={"#portfolio"}>Portfolio</a>
      </li>
      <li onClick={() => setIsMenuOpen(false)}>
        <a href={"#contact"}>Contact</a>
      </li>
    </ul>
  );
};

export default Navbar;
