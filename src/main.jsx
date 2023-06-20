import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from './Component/Pages/Home/Home.jsx';
import HeroSection from './Component/Pages/Home/HeroSection/HeroSection.jsx';
import About from './Component/Pages/Home/About/About';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: '/',
                element: <HeroSection></HeroSection>
            },
            {
                path: '/about',
                element: <About></About>
            }

        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
