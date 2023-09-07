import React from "react";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-5 pt-5 footer-container text-white">
      <hr className="text-white"/>
      <div className="text-center fs-3 fw-bold">Abdullah Al Numan Rahi</div>
      <div className="fs-5 text-center">Frontend Developer</div>
      <div className="text-center">
        <a
          className="fs-2 px-2"
          href="https://www.linkedin.com/in/abdullah-al-numan-rahi-610611249/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-white" />
        </a>
        <a
          className="fs-2 px-2"
          href="https://web.facebook.com/RahiX2020/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="text-white" />
        </a>
        <a
          className="fs-2 px-2"
          href="https://github.com/numanrahi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-white" />
        </a>
      </div>
      <hr className="text-white"/>
      <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between align-items-center">
        <div className="mb-3 mb-sm-0 ps-5">
          <p>&copy; 2023 Abdullah Al Numan Rahi. All rights reserved.</p>
        </div>
        <div className="mt-3 mt-sm-0 pe-5">
          <Link to="/" className="text-decoration-none px-1" style={{color:'#a9dfbf'}}>
            Home
          </Link>
          <Link to="/project" className="text-decoration-none px-1" style={{color:'#a9dfbf'}}>
            Projects
          </Link>
          <Link to="/skills" className="text-decoration-none px-1" style={{color:'#a9dfbf'}}>
            Skills
          </Link>
          <Link to="/contact" className="text-decoration-none px-1" style={{color:'#a9dfbf'}}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
