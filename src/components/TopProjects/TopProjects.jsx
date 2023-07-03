import React from "react";
import './TopProjects.css'

const TopProjects = () => {
  return (
    <div className="mt-5">
      <div className="fs-2 text-center mb-5">Top Projects</div>
      <div className="d-flex justify-content-around">
        <div className="parent">
          <img className="box box1" src="https://i.postimg.cc/gjNqDKxB/toyverse.png" alt="" />
        </div>
        <div className="parent">
          <img className="box box2" src="https://i.postimg.cc/d35X1CwQ/photo-carft.png" alt="" />
        </div>
        <div className="parent">
          <img className="box box3" src="https://i.postimg.cc/ZqYw9RsC/bengali-buzz.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TopProjects;
