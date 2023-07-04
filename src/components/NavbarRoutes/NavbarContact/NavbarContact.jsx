import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Contact from '../../Contact/Contact';
import Footer from '../../Footer/Footer';
import ButtomNavbar from '../../ButtomNavbar/ButtomNavbar';

const NavbarContact = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ButtomNavbar></ButtomNavbar>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default NavbarContact;