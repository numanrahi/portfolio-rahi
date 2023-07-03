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
    <div style={{maxWidth:"1200px"}} className="pt-5 mx-auto">
      <div className="fs-2 text-center">Skills</div>
      <div data-aos="fade-up" className="row text-center pt-5">
        <div className="col-2"><AiFillHtml5/> HTML</div>
        <div className="col-10">
          <ProgressBar completed={90} width="75%" />
        </div>
      </div>
      <div data-aos="fade-up" className="row text-center py-2">
        <div className="col-2"><FaCss3Alt/> CSS</div>
        <div className="col-10">
          <ProgressBar completed={90} width="75%" />
        </div>
      </div>
      <div data-aos="fade-up" className="row text-center py-2">
        <div className="col-2"><AiFillGithub/> Github</div>
        <div className="col-10">
          <ProgressBar completed={90} width="75%" />
        </div>
      </div>
      <div data-aos="fade-up" className="row text-center py-2">
        <div className="col-2"><BiLogoFigma/> Figma</div>
        <div className="col-10">
          <ProgressBar completed={90} width="75%" />
        </div>
      </div>
      <div data-aos="fade-up" className="row text-center py-2">
        <div className="col-2"><BsBootstrapFill/> Bootstrap</div>
        <div className="col-10">
          <ProgressBar completed={90} width="75%" />
        </div>
      </div>
      <div data-aos="fade-up" className="row text-center py-2">
        <div className="col-2"><TbBrandReactNative/>React Bootstrap</div>
        <div className="col-10">
          <ProgressBar completed={90} width="75%" />
        </div>
      </div>
      <div data-aos="fade-up" className="row text-center py-2">
        <div className="col-2"><BiLogoTailwindCss/> TailwindCSS</div>
        <div className="col-10">
          <ProgressBar completed={90} width="75%" />
        </div>
      </div>
      <div data-aos="fade-up" className="row text-center py-2">
        <div className="col-2"><SiDaisyui/> DaisyUI</div>
        <div className="col-10">
          <ProgressBar completed={80} width="75%" />
        </div>
      </div>
      <div data-aos="fade-up" className="row text-center py-2">
        <div className="col-2"><BiLogoJavascript/> JavaScript</div>
        <div className="col-10">
          <ProgressBar completed={80} width="75%" />
        </div>
      </div>
      <div data-aos="fade-up" className="row text-center py-2">
        <div className="col-2"><BsBugFill/> Debugging</div>
        <div className="col-10">
          <ProgressBar completed={70} width="75%" />
        </div>
      </div>
      <div data-aos="fade-up" className="row text-center py-2">
        <div className="col-2"><GrReactjs/> ReactJS</div>
        <div className="col-10">
          <ProgressBar completed={80} width="75%" />
        </div>
      </div>
      <div data-aos="fade-up" className="row text-center py-2">
        <div className="col-2"><SiFirebase/> Firebase</div>
        <div className="col-10">
          <ProgressBar completed={90} width="75%" />
        </div>
      </div>
      <div data-aos="fade-up" className="row text-center py-2">
        <div className="col-2"><BiLogoNetlify/> Netlify</div>
        <div className="col-10">
          <ProgressBar completed={90} width="75%" />
        </div>
      </div>
      <div data-aos="fade-up" className="row text-center py-2">
        <div className="col-2"><SiVercel/> Vercel</div>
        <div className="col-10">
          <ProgressBar completed={90} width="75%" />
        </div>
      </div>
      <div data-aos="fade-up" className="row text-center py-2">
        <div className="col-2"><BiLogoMongodb/> MongoDB</div>
        <div className="col-10">
          <ProgressBar completed={70} width="75%" />
        </div>
      </div>
      <div data-aos="fade-up" className="row text-center py-2">
        <div className="col-2"><BiLogoNodejs/> NodeJS</div>
        <div className="col-10">
          <ProgressBar completed={60} width="75%" />
        </div>
      </div>
      <div data-aos="fade-up" className="row text-center py-2">
        <div className="col-2"><SiExpress/> ExpressJS</div>
        <div className="col-10">
          <ProgressBar completed={60} width="75%" />
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
