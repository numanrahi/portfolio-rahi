import React from "react";
import "./TopProjects.css";
import { Link } from "react-router-dom";
import ButtomNavbar from "../ButtomNavbar/ButtomNavbar";

const TopProjects = () => {
  return (
    <div className="mt-5">
      <ButtomNavbar></ButtomNavbar>
      <div className="fs-2 text-center mb-5">Top Projects</div>
      <div style={{ maxWidth: "1200px" }} className="mx-auto">
        <div className="row justify-content-around align-items-center">
          <div className="col-md-6 col-11 mx-auto project-img-1 my-4"></div>
          <div className="col-md-6 col-11 mx-auto">
            <div className="display-6 pt-3 text-center">PhotoCraft</div>
            <div className="d-flex justify-content-between mt-2">
              <Link
                className="text-decoration-none"
                to="https://photo-craft-rahi.web.app/"
              >
                Live Site
              </Link>
              <Link
                className="text-decoration-none"
                to="https://github.com/numanrahi/photo-craft-client"
              >
                Client Repo
              </Link>
              <Link
                to="https://github.com/numanrahi/photo-craft-server"
                className="text-decoration-none"
              >
                Server Repo
              </Link>
            </div>
          </div>
        </div>
        <div className="row justify-content-around align-items-center">
          <div className="col-md-6 col-11 mx-auto project-img-2 my-4"></div>
          <div className="col-md-6 col-11 mx-auto">
            <div className="display-6 pt-3 text-center">Bengali Buzz</div>
            <div className="d-flex justify-content-between mt-2">
              <Link
                className="text-decoration-none"
                to="https://assignment-10-422d7.web.app/"
              >
                Live Site
              </Link>
              <Link
                className="text-decoration-none"
                to="https://github.com/numanrahi/bengali-buzz-client"
              >
                Client Repo
              </Link>
              <Link
                to="https://github.com/numanrahi/bengali-buzz-server"
                className="text-decoration-none"
              >
                Server Repo
              </Link>
            </div>
          </div>
        </div>
        <div className="row justify-content-around align-items-center">
          <div className="col-md-6 col-11 mx-auto project-img-3 my-4"></div>
          <div className="col-md-6 col-11 mx-auto">
            <div className="display-6 pt-3 text-center">ToyVerse</div>
            <div className="d-flex justify-content-between mt-2">
              <Link
                className="text-decoration-none"
                to="https://toyverse-rahi.web.app/main"
              >
                Live Site
              </Link>
              <Link
                className="text-decoration-none"
                to="https://github.com/numanrahi/toy-verse-client"
              >
                Client Repo
              </Link>
              <Link
                to="https://github.com/numanrahi/toy-verse-server"
                className="text-decoration-none"
              >
                Server Repo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProjects;