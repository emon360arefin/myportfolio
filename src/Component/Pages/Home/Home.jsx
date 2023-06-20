import React from 'react';
import Header from '../../Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Home;