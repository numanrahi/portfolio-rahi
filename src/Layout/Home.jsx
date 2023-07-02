import React, { useEffect } from 'react';
import Navbar from "../components/Navbar/Navbar";
import Banner from '../components/Banner/Banner';
import SkillsSection from '../components/SkillsSection/SkillsSection';
import MyServices from '../components/MyServices/MyServices';

const Home = () => {
    return (
        <div style={{backgroundColor: 'rgba(248, 234, 240, 0.87)'}}>
            <Navbar></Navbar>
            <Banner></Banner>
            <SkillsSection></SkillsSection>
            <MyServices></MyServices>
        </div>
    );
};

export default Home;
