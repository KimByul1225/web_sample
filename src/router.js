import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import App from './App';
import Sub1 from '@/containers/Sub1';
import Home from '@/containers/Home';
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
                path: "sub",
                element: <Sub1 />,
            },
        ],
        errorElement: <NotFound />
    }
])

export default router