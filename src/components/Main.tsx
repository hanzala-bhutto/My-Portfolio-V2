import React from "react";
import '../assets/styles/Main.scss';
import profile from '../assets/images/profile_photo/profile_photo.png';
import {FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";

function Main() {

  return (
    <div id="about">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profile} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/hanzala-bhutto" target="_blank" rel="noreferrer"><FaGithub/></a>
            <a href="https://www.linkedin.com/in/hanzala-bhutto-a10936234/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
            
            <a href={require('../assets/resume/Hanzala_CV_Software_Engineer.pdf')} download="Hanzala_CV_Software_Engineer">
              <FaFilePdf/> CV
            </a>

          </div>
          <h1 id="intro_name">Hanzala Bhutto</h1>
          <p id="intro_headline">Software Engineer</p>
          <p id="intro_description">I’m a software engineer pursuing a Master’s in Distributed Systems Engineering at TU Dresden. With expertise in Frontend, Backend, Generative AI, DevOps, and distributed systems, I thrive on creating innovative solutions and tackling complex challenges in dynamic environments.</p>
          <div className="mobile_social_icons">
            <a href="https://github.com/hanzala-bhutto" target="_blank" rel="noreferrer"><FaGithub/></a>
            <a href="https://www.linkedin.com/in/hanzala-bhutto-a10936234/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
            <a href={require('../assets/resume/Hanzala_CV_Software_Engineer.pdf')} download="Hanzala_CV_Software_Engineer">
              <FaFilePdf/> CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;