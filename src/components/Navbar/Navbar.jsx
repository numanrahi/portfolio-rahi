import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const handleDownload = () => {
    const fileUrl = "Abdullah Al Numan Rahi Resume.pdf";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.target = "_blank";
    link.download = "Abdullah Al Numan Rahi Resume.pdf";

    link.click();
  };
  return (
    <div className="d-md-flex d-none py-2 p-2 justify-content-between">
      <div className="fs-3 ms-3 animate-charcter">RAHI</div>
      <div>
        <Link to="/" className="text-decoration-none text-white mx-3 fs-5">
          Home
        </Link>
        <Link to="/skills" className="text-decoration-none text-white mx-3 fs-5">
          Skills
        </Link>
        <Link
          to="/my-project"
          className="text-decoration-none text-white mx-3 fs-5"
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className="text-decoration-none text-white mx-3 fs-5"
        >
          Contact
        </Link>
      </div>
      <div>
        <button onClick={handleDownload} className="btn btn-primary">
          Resume
        </button>
      </div>
    </div>
  );
};

export default Navbar;
