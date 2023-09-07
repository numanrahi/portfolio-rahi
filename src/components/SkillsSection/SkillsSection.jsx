import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import {BsBootstrapFill, BsBugFill} from "react-icons/bs"
import { FaCss3Alt } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { TbBrandReactNative } from "react-icons/tb";
import { SiDaisyui, SiExpress, SiFirebase, SiVercel } from "react-icons/si";
import { BiLogoFigma, BiLogoJavascript, BiLogoMongodb, BiLogoNetlify, BiLogoNodejs, BiLogoTailwindCss } from "react-icons/bi";
AOS.init();

const SkillsSection = () => {
  return (
    <div className="container pt-5 text-white">
      <div className="fs-2 text-center fw-bold">Skills</div>
      <div data-aos="fade-up" className="row text-center pt-5">
        <div className="col-sm-2 col-4">
          <AiFillHtml5 /> HTML
        </div>
        <div className="col-sm-10 col-8">
          <ProgressBar completed={90} />
        </div>
      </div>
      <div data-aos="fade-up" className="row text-center py-2">
        <div className="col-sm-2 col-4">
          <FaCss3Alt /> CSS
        </div>
        <div className="col-sm-10 col-8">
          <ProgressBar completed={90} />
        </div>
      </div>
      <div data-aos="fade-up" className="row text-center py-2">
        <div className="col-sm-2 col-4">
          <AiFillGithub /> Github
        </div>
        <div className="col-sm-10 col-8">
          <ProgressBar completed={90} />
        </div>
      </div>
      <div data-aos="fade-up" className="row text-center py-2">
        <div className="col-sm-2 col-4">
          <BiLogoFigma /> Figma
        </div>
        <div className="col-sm-10 col-8">
          <ProgressBar completed={90} />
        </div>
      </div>
      <div data-aos="fade-up" className="row text-center py-2">
        <div className="col-sm-2 col-4">
          <BsBootstrapFill /> Bootstrap
        </div>
        <div className="col-sm-10 col-8">
          <ProgressBar completed={90} />
        </div>
      </div>
      <div data-aos="fade-up" className="row text-center py-2">
        <div className="col-sm-2 col-4">
          <TbBrandReactNative />
          React Bootstrap
        </div>
        <div className="col-sm-10 col-8">
          <ProgressBar completed={90} />
        </div>
      </div>
      <div data-aos="fade-up" className="row text-center py-2">
        <div className="col-sm-2 col-4">
          <BiLogoTailwindCss /> TailwindCSS
        </div>
        <div className="col-sm-10 col-8">
          <ProgressBar completed={90} />
        </div>
      </div>
      <div data-aos="fade-up" className="row text-center py-2">
        <div className="col-sm-2 col-4">
          <SiDaisyui /> DaisyUI
        </div>
        <div className="col-sm-10 col-8">
          <ProgressBar completed={80} />
        </div>
      </div>
      <div data-aos="fade-up" className="row text-center py-2">
        <div className="col-sm-2 col-4">
          <BiLogoJavascript /> JavaScript
        </div>
        <div className="col-sm-10 col-8">
          <ProgressBar completed={80} />
        </div>
      </div>
      <div data-aos="fade-up" className="row text-center py-2">
        <div className="col-sm-2 col-4">
          <BsBugFill /> Debugging
        </div>
        <div className="col-sm-10 col-8">
          <ProgressBar completed={70} />
        </div>
      </div>
      <div data-aos="fade-up" className="row text-center py-2">
        <div className="col-sm-2 col-4">
          <GrReactjs /> ReactJS
        </div>
        <div className="col-sm-10 col-8">
          <ProgressBar completed={80} />
        </div>
      </div>
      <div data-aos="fade-up" className="row text-center py-2">
        <div className="col-sm-2 col-4">
          <SiFirebase /> Firebase
        </div>
        <div className="col-sm-10 col-8">
          <ProgressBar completed={90} />
        </div>
      </div>
      <div data-aos="fade-up" className="row text-center py-2">
        <div className="col-sm-2 col-4">
          <BiLogoNetlify /> Netlify
        </div>
        <div className="col-sm-10 col-8">
          <ProgressBar completed={90} />
        </div>
      </div>
      <div data-aos="fade-up" className="row text-center py-2">
        <div className="col-sm-2 col-4">
          <SiVercel /> Vercel
        </div>
        <div className="col-sm-10 col-8">
          <ProgressBar completed={90} />
        </div>
      </div>
      <div data-aos="fade-up" className="row text-center py-2">
        <div className="col-sm-2 col-4">
          <BiLogoMongodb /> MongoDB
        </div>
        <div className="col-sm-10 col-8">
          <ProgressBar completed={70} />
        </div>
      </div>
      <div data-aos="fade-up" className="row text-center py-2">
        <div className="col-sm-2 col-4">
          <BiLogoNodejs /> NodeJS
        </div>
        <div className="col-sm-10 col-8">
          <ProgressBar completed={60} />
        </div>
      </div>
      <div data-aos="fade-up" className="row text-center py-2">
        <div className="col-sm-2 col-4">
          <SiExpress /> ExpressJS
        </div>
        <div className="col-sm-10 col-8">
          <ProgressBar completed={60} />
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
