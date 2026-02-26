import React from "react";
import '../assets/styles/Footer.scss'
import { FaGithub, FaLinkedin, FaXingSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/hanzala-bhutto" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/hanzala-bhutto-a10936234/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
        <a href="https://www.xing.com/profile/Hanzala_bhutto" target="_blank" rel="noreferrer"><FaXingSquare /></a>
      </div>
    </footer>
  );
}

export default Footer;