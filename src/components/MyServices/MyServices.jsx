import React from "react";
import "./MyServices.css";

const MyServices = () => {
  return (
    <div style={{ maxWidth: "1200px" }} className="mt-5 container ">
      <div className="fs-2 text-center">My Services</div>
      <div className="row justify-content-center ">
        <div
          data-aos="fade-up"
          className="col-11 col-md-6 mx-auto text-center px-4 py-3"
        >
          <div className="border border-primary px-3 py-5 rounded-4 border-hover">
            <div className="mx-auto">
              <img
                className="h-10"
                src="https://i.postimg.cc/1t55dxF9/figma.png"
                alt=""
              />
            </div>
            <div className="fs-3">Figma To HTML</div>
            <div className="w-75 mx-auto">
              I will convert your Figma file to a pixel perfect HTML with latest
              technology. It will also fully responsive
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="col-11 col-md-6 mx-auto text-center px-4 py-3"
        >
          <div className="border border-primary px-3 py-5 rounded-4 border-hover">
            <div className="mx-auto">
              <img
                className="h-10"
                src="https://i.postimg.cc/d0RgyLL1/responsive-design.png"
                alt=""
              />
            </div>
            <div className="fs-3">Responsive Design</div>
            <div className="w-75 mx-auto">
              Creating fluid and dynamic web experiences that adapt seamlessly
              across devices is where my expertise in responsive web design
              shines.
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="col-11 col-md-6 mx-auto text-center px-4 py-3"
        >
          <div className="border border-primary px-3 py-5 rounded-4 border-hover">
            <div className="mx-auto">
              <img
                className="h-10"
                src="https://i.postimg.cc/MpqL8zsJ/custom.png"
                alt=""
              />
            </div>
            <div className="fs-3">Website Customization</div>
            <div className="w-75 mx-auto">
              I specialize in creating responsive website customizations that
              seamlessly adapt to different screen sizes, providing the best
              user experience on any device.
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="col-11 col-md-6 mx-auto text-center px-4 py-3"
        >
          <div className="border border-primary px-3 py-5 rounded-4 border-hover">
            <div className="mx-auto">
              <img
                className="h-10"
                src="https://i.postimg.cc/gkJwthWC/character-design.png"
                alt=""
              />
            </div>
            <div className="fs-3">Custom Design</div>
            <div className="w-75 mx-auto">
              I have a strong proficiency in creating custom designs that are
              not only visually captivating but also fully responsive, ensuring
              a seamless experience across all devices.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
