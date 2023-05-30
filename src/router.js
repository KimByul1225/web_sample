import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import App from './App';
import Home from '@/containers/Home';

import Company from '@/containers/Company';


import Introduction from '@/containers/Introduction';

import IntroductionListType01 from '@/components/introduction/IntroductionListType01';
import IntroductionListType02 from '@/components/introduction/IntroductionListType02';


import NotFound from '@/components/error/NotFound';
import CompanyTotal from '@/components/company/CompanyTotal';
import Partners from '@/components/introduction/Partners';
import IntroductionDetail from '@/containers/IntroductionDetail';


import IntroductionListType01Detail from '@/components/introduction/IntroductionListType01Detail';
import IntroductionListType02Detail from '@/components/introduction/IntroductionListType02Detail';

import IntroductionNormalType01 from '@/components/introduction/IntroductionNormalType01';
import IntroductionNormalType02 from '@/components/introduction/IntroductionNormalType02';



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
                        path: "normalType01",
                        element: <IntroductionNormalType01 />,
                    },
                    {
                        path: "normalType02",
                        element: <IntroductionNormalType02 />,
                    },
                    {
                        path: "listType01",
                        element: <IntroductionListType01 />,
                    },
                    {
                        path: "listType02",
                        element: <IntroductionListType02 />,
                    },
                    {
                        path: "partners",
                        element: <Partners />,
                    }
                ],
            },
            {
                path: "introduction/listType01/:detailId",
                element: <IntroductionDetail/>,
                children: [
                    {
                        path: "",
                        element: <IntroductionListType01Detail />,
                    },
                ],
            },
            {
                path: "introduction/listType02/:detailId",
                element: <IntroductionDetail />,
                children: [
                    {
                        path: "",
                        element: <IntroductionListType02Detail />,
                    },
                ],
            }

        ],
        errorElement: <NotFound />
    }
])

export default router