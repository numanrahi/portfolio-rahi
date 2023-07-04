import React from "react";
import { Link } from "react-router-dom";
import './ButtomNavbar.css';
import { HiHome } from 'react-icons/hi';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { BsCodeSlash,BsDownload } from 'react-icons/bs';

const ButtomNavbar = () => {

    const handleDownload = () => {
        // File URL
        const fileUrl = "Abdullah Al Numan Rahi Resume.pdf";
    
        // Create a temporary anchor tag
        const link = document.createElement("a");
        link.href = fileUrl;
        link.target = "_blank";
        link.download = "Abdullah Al Numan Rahi Resume.pdf";
    
        // Dispatch a click event to download the file
        link.click();
      };

  return (
    <div className="d-block d-md-none">
      <div className="b-nav row align-items-center px-5 py-2 padding mx-auto">
        <Link to="/" className="col-3 d-flex justify-content-center align-items-center text-decoration-none text-white">
          <div className=" btn-b-nav">
            <HiHome className="fs-2"></HiHome>
          </div>
        </Link>
        <Link  to="/my-project" className="col-3 d-flex justify-content-center align-items-center text-decoration-none text-white">
          <div className=" btn-b-nav">
            <BsCodeSlash className="fs-2"></BsCodeSlash>
          </div>
        </Link>
        <Link to="/contact" className="col-3 d-flex justify-content-center align-items-center text-decoration-none text-white">
          <div className=" btn-b-nav">
            <RiContactsBook2Fill className="fs-2"></RiContactsBook2Fill>
          </div>
        </Link>
        <Link className="col-3 d-flex justify-content-center align-items-center text-decoration-none text-white">
          <div className=" btn-b-nav">
            <BsDownload onClick={handleDownload} className="fs-2"></BsDownload>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ButtomNavbar;
