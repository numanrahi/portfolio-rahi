import React from "react";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div style={{ maxWidth: "1200px" }} className="row mx-auto">
      <div className="col-6">
        <p style={{ fontSize: "2em" }}>Hello 👋 I'm</p>
        <TypeAnimation
          sequence={[
            "Abdullah Al Numan Rahi",
            500,
            "a frontend web developer", //  Continuing previous Text
            500,
            // "One Two Three",
            500,
            "Abdullah Al Numan Rahi",
            500,
            "a frontend web developer",
            500,
            "",
            500,
          ]}
          style={{ fontSize: "2em" }}
          repeat={Infinity}
        />
        {/* <section className="animation">
          <div className="first">
            <div>Abdullah Al Numan Rahi</div>
          </div>
          <div className="second">
            <div>Frontend Web Developer</div>
          </div>
        </section> */}
      </div>
      <div className="col-6">
        <img
          className="img-fluid rounded-3"
          src="https://media.istockphoto.com/id/1306317401/vector/web-development-technology-programming-for-internet-web-design-concept-in-dark-background.jpg?s=612x612&w=0&k=20&c=FfX1dCsbLdjvKNdyEAsSy0F9MBLD0FDO9YfYT5SrwOI="
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
