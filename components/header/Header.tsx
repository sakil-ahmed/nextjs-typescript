import React, { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import Menubar from "./navbar/Navbar";
import logo from "./../../assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const options = ["En", "Bn"];

  const onSelect = (e: any) => {
    console.log(e.label);
  };
  const defaultOption = options[0];

  return (
    <header className="header" id="header">
      <div className="container__fluid">
        <div className="row">
          <div className="mobile__menu__bar">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="mobile__menu__bar__btn"
            >
              <HiOutlineMenuAlt1 />
            </button>
          </div>
          <div className="logo">
            <Link href={"/"}>
              <Image src={logo} alt="Sakil Logo" priority={true} />
            </Link>
          </div>
          <nav className={`nav__menu ${isMenuOpen && "nav__menu__open"}`}>
            <div className="close__menu">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="close__menu__btn"
              >
                <MdClose />
              </button>
            </div>
            <Menubar setIsMenuOpen={setIsMenuOpen} />
          </nav>
          {/* <div className="header__btn">
            <a className="resume__btn" href="Resume.pdf" download>
              Resume
            </a>
            <Dropdown
              options={options}
              onChange={onSelect}
              value={defaultOption}
              placeholder="Select an option"
            />
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
