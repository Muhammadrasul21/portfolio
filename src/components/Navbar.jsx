import { FaLinkedin } from "react-icons/fa";
import logo from "../assets/raviKumarLogo.webp";
import React from "react";
import { GiThunderBlade } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";
import { BsInstagram, BsTelegram } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 item-center">
        <a href="/" aria-label="Home">
          <img src={logo} alt="logo" className="mx-2 w-[50px] h-[33px]" />
        </a>
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/muhammadrasul-gulomjonov-176437317"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIN"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Muhammadrasul21"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIN"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/gulomoov_1/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIN"
        >
          <BsInstagram />
        </a>
        <a
          href="https://t.me/gulomoov_1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIN"
        >
          <BsTelegram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
