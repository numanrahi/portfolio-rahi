import React from "react";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div style={{ maxWidth: "1200px" }} className="row mx-auto">
      <div className="col-6 my-auto">
        <span className="d-flex fs-5 fw-bold">Frontend developer / ReactJS Developer</span>
        <p style={{ fontSize: "2em" }}>Hello There! I'm</p>
        <TypeAnimation
          sequence={[
            "Abdullah Al Numan Rahi",
            500,
            "a frontend web developer", //  Continuing previous Text
            500,
            "a ReactJs developer",
            500,
            "Abdullah Al Numan Rahi",
            500,
            "a frontend web developer",
            500,
            "a ReactJs developer",
            500,
          ]}
          style={{ fontSize: "2em" }}
          repeat={Infinity}
        />
      </div>
      <div className="col-6">
        <img
          className="img-fluid rounded-5 border border-primary"
          src="https://i.postimg.cc/qRPvYtwQ/My-project-1.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
