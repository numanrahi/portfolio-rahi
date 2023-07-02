import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const SkillsSection = () => {
  return (
    <div style={{maxWidth:"1200px"}} className="mt-5 mx-auto">
      <div className="fs-2 text-center">Skills</div>
      <div data-aos="fade-up" className="row text-center pt-5">
        <div className="col-2">HTML</div>
        <div className="col-10">
          <ProgressBar completed={90} width="75%" />
        </div>
      </div>
      <div data-aos="fade-up" className="row text-center py-2">
        <div className="col-2">CSS</div>
        <div className="col-10">
          <ProgressBar completed={90} width="75%" />
        </div>
      </div>
      <div data-aos="fade-up" className="row text-center py-2">
        <div className="col-2">Bootstrap</div>
        <div className="col-10">
          <ProgressBar completed={90} width="75%" />
        </div>
      </div>
      <div data-aos="fade-up" className="row text-center py-2">
        <div className="col-2">TailwindCSS</div>
        <div className="col-10">
          <ProgressBar completed={90} width="75%" />
        </div>
      </div>
      <div data-aos="fade-up" className="row text-center py-2">
        <div className="col-2">DaisyUI</div>
        <div className="col-10">
          <ProgressBar completed={80} width="75%" />
        </div>
      </div>
      <div data-aos="fade-up" className="row text-center py-2">
        <div className="col-2">JavaScript</div>
        <div className="col-10">
          <ProgressBar completed={80} width="75%" />
        </div>
      </div>
      <div data-aos="fade-up" className="row text-center py-2">
        <div className="col-2">ReactJS</div>
        <div className="col-10">
          <ProgressBar completed={80} width="75%" />
        </div>
      </div>
      <div data-aos="fade-up" className="row text-center py-2">
        <div className="col-2">Firebase</div>
        <div className="col-10">
          <ProgressBar completed={90} width="75%" />
        </div>
      </div>
      <div data-aos="fade-up" className="row text-center py-2">
        <div className="col-2">MongoDB</div>
        <div className="col-10">
          <ProgressBar completed={70} width="75%" />
        </div>
      </div>
      <div data-aos="fade-up" className="row text-center py-2">
        <div className="col-2">NodeJS</div>
        <div className="col-10">
          <ProgressBar completed={60} width="75%" />
        </div>
      </div>
      <div data-aos="fade-up" className="row text-center py-2">
        <div className="col-2">ExpressJS</div>
        <div className="col-10">
          <ProgressBar completed={60} width="75%" />
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
