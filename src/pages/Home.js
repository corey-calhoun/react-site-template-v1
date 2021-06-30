import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection/InfoSection';
import Footer from '../components/Footer';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../components/InfoSection/Data';
import Services from '../components/Services';

function Home() {

    const [isOpen, setOpen] = useState(false);

    const menuToggle = () => {
        setOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={menuToggle} />
            <Navbar toggle={menuToggle} />
            <Hero />
            <InfoSection  {...homeObjOne} />
            <InfoSection  {...homeObjTwo} />
            <Services />
            <InfoSection  {...homeObjThree} />
            <InfoSection {...homeObjFour} />
            <Footer />
        </>
    )
}

export default Home;
