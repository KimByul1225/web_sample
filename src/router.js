import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import App from './App';
import Home from '@/containers/Home';

import Company from '@/containers/Company';


import Introduction from '@/containers/Introduction';
import IntroductionType01 from './components/introduction/IntroductionType01';
import IntroductionType02 from './components/introduction/IntroductionType02';


import NotFound from '@/components/error/NotFound';
import CompanyTotal from './components/company/CompanyTotal';
import Partners from './components/introduction/Partners';
import IntroductionDetail from './containers/IntroductionDetail';
import IntroductionType01Detail from './components/introduction/IntroductionType01Detail';
import IntroductionType02Detail from './components/introduction/IntroductionType02Detail';



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
                        path: "",
                        element: <CompanyTotal />,
                    },
                ],
            },
            {
                path: "introduction",
                element: <Introduction />,
                children: [
                    {
                        path: "",
                        element: <IntroductionType01 />,
                    },
                    {
                        path: "type02",
                        element: <IntroductionType02 />,
                    },
                    {
                        path: "partners",
                        element: <Partners />,
                    }
                ],
            },
            {
                path: "introduction/:detailId",
                element: <IntroductionDetail/>,
                children: [
                    {
                        path: "",
                        element: <IntroductionType01Detail />,
                    },
                ],
            },
            {
                path: "introduction/type02/:detailId",
                element: <IntroductionDetail />,
                children: [
                    {
                        path: "",
                        element: <IntroductionType02Detail />,
                    },
                ],
            }

        ],
        errorElement: <NotFound />
    }
])

export default router