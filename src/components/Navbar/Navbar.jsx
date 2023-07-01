import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="d-flex my-2 mt-0 p-2 justify-content-between">
      <div className="fs-3 ms-3 animate-charcter">RAHI</div>
      <div>
        <Link className="text-decoration-none mx-3 fs-5">Skills</Link>
        <Link className="text-decoration-none mx-3 fs-5">Projects</Link>
      </div>
      <div>
        <button className="btn btn-primary">Download Resume</button>
      </div>
    </div>
  );
};

export default Navbar;
