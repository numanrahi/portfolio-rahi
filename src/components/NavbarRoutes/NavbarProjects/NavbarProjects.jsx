import React from 'react';
import Navbar from '../../Navbar/Navbar';
import TopProjects from '../../TopProjects/TopProjects';
import Footer from '../../Footer/Footer';
import ButtomNavbar from '../../ButtomNavbar/ButtomNavbar';

const NavbarProjects = () => {
    return (
        <div style={{ backgroundColor: "#30414B" }}>
            <Navbar></Navbar>
            <ButtomNavbar></ButtomNavbar>
            <TopProjects></TopProjects>
            <Footer></Footer>
        </div>
    );
};

export default NavbarProjects;