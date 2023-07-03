import React from "react";
import "./TopProjects.css";
import { Link } from "react-router-dom";

const TopProjects = () => {
  return (
    <div className="mt-5">
      <div className="fs-2 text-center mb-5">Top Projects</div>
      <div style={{ maxWidth: "1200px" }} className="mx-auto">
        <div className="d-flex justify-content-around">
          <div className="project-img-1 my-4"></div>
          <div>
            <div className="fs-3 pt-3">Project Name: PhotoCraft</div>
            <Link
              className="text-decoration-none px-4 mt-3"
              to="https://photo-craft-rahi.web.app/"
            >
              Live Site
            </Link>
            <Link
              className="text-decoration-none px-4 mt-3"
              to="https://github.com/numanrahi/photo-craft-client"
            >
              Client Repo
            </Link>
            <Link
              to="https://github.com/numanrahi/photo-craft-server"
              className="text-decoration-none px-4 mt-3"
            >
              Server Repo
            </Link>
          </div>
        </div>
        <div className="d-flex justify-content-around">
          <div className="project-img-2 my-4"></div>
          <div>
            <div className="fs-3 pt-3">Project Name: Bengali Buzz</div>
            <Link
              className="text-decoration-none px-4 mt-3"
              to="https://assignment-10-422d7.web.app/"
            >
              Live Site
            </Link>
            <Link
              className="text-decoration-none px-4 mt-3"
              to="https://github.com/numanrahi/bengali-buzz-client"
            >
              Client Repo
            </Link>
            <Link
              to="https://github.com/numanrahi/bengali-buzz-server"
              className="text-decoration-none px-4 mt-3"
            >
              Server Repo
            </Link>
          </div>
        </div>
        <div className="d-flex justify-content-around">
          <div className="project-img-3 my-4"></div>
          <div>
            <div className="fs-3 pt-3">Project Name: ToyVerse</div>
            <Link
              className="text-decoration-none px-4 mt-3"
              to="https://toyverse-rahi.web.app/main"
            >
              Live Site
            </Link>
            <Link
              className="text-decoration-none px-4 mt-3"
              to="https://github.com/numanrahi/toy-verse-client"
            >
              Client Repo
            </Link>
            <Link
              to="https://github.com/numanrahi/toy-verse-server"
              className="text-decoration-none px-4 mt-3"
            >
              Server Repo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProjects;
