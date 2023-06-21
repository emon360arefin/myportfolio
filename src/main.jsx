import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Landing from './Component/Pages/Landing/Landing';
import Home from './Component/Pages/Home/Home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing></Landing>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }

        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
