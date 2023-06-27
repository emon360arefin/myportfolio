import React from 'react';
import Header from '../../Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import HeroSection from './HeroSection/HeroSection';
import About from './About/About';
import Projects from './Projects/Projects';
import Photography from './Photography/Photography';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <About></About>
            <Projects></Projects>
            <Photography></Photography>

        </div>
    );
};

export default Home;