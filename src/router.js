import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import App from './App';
import Home from '@/containers/Home';
import Company from '@/containers/company/Company';



import NotFound from '@/components/error/NotFound';



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "company",
                element: <Company />,
                children: [
                    {
                        
                    },
                ],
            },
        ],
        errorElement: <NotFound />
    }
])

export default router