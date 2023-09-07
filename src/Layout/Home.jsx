import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import SkillsSection from "../components/SkillsSection/SkillsSection";
import MyServices from "../components/MyServices/MyServices";
import TopProjects from "../components/TopProjects/TopProjects";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#30414B" }}>
      <Navbar></Navbar>
      <Banner></Banner>
      <SkillsSection></SkillsSection>
      <MyServices></MyServices>
      <TopProjects></TopProjects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
