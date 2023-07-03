import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="d-flex my-2 p-2 justify-content-between">
      <div className="fs-3 ms-3 animate-charcter">RAHI</div>
      <div>
        <Link to="/" className="text-decoration-none text-dark mx-3 fs-5">Home</Link>
        <Link className="text-decoration-none text-dark mx-3 fs-5">Skills</Link>
        <Link className="text-decoration-none text-dark mx-3 fs-5">Projects</Link>
        <Link className="text-decoration-none text-dark mx-3 fs-5">Contact</Link>
      </div>
      <div>
        <button className="btn btn-primary">Resume</button>
      </div>
    </div>
  );
};

export default Navbar;