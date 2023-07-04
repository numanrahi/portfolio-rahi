import React from 'react';
import Navbar from '../../Navbar/Navbar';
import SkillsSection from '../../SkillsSection/SkillsSection';
import Footer from '../../Footer/Footer';
import ButtomNavbar from '../../ButtomNavbar/ButtomNavbar';

const NavbarSkills = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ButtomNavbar></ButtomNavbar>
            <SkillsSection></SkillsSection>
            <Footer></Footer>
        </div>
    );
};

export default NavbarSkills;