import React from "react";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-5 pt-5">
      <hr />
      <div className="text-center fs-3">Abdullah Al Numan Rahi</div>
      <div className="fs-5 text-center">Frontend Developer</div>
      <div className="text-center">
        <Link
          className="fs-2 px-2"
          to="https://www.linkedin.com/in/abdullah-al-numan-rahi-610611249/"
        >
          <FaLinkedin />
        </Link>
        <Link className="fs-2 px-2" to="https://web.facebook.com/RahiX2020/">
          <FaFacebook />
        </Link>
        <Link className="fs-2 px-2" to="https://github.com/numanrahi">
          <FaGithub />
        </Link>
      </div>
      <hr />
      <div className="d-flex justify-content-around">
        <div>
          <p>&copy; 2023 Abdullah Al Numan Rahi. All rights reserved.</p>
        </div>
        <div>
          <Link to="/" className="text-decoration-none px-1 text-dark">Home</Link>
          <Link to="/project" className="text-decoration-none px-1 text-dark">Projects</Link>
          <Link to="/skills" className="text-decoration-none px-1 text-dark">Skills</Link>
          <Link to="/contact" className="text-decoration-none px-1 text-dark">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
