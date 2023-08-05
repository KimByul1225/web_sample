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
import IntroductionListType01Detail from '@/components/introduction/IntroductionListType01Detail';
import IntroductionListType02Detail from '@/components/introduction/IntroductionListType02Detail';
import IntroductionNormalType01 from '@/components/introduction/IntroductionNormalType01';
import IntroductionNormalType02 from '@/components/introduction/IntroductionNormalType02';
import Member from '@/components/company/Member';
import List from '@/containers/List';
import TextType from '@/components/list/TextType';
import ImageType from '@/components/list/ImageType';
import Terms from '@/containers/Terms';
import Privacy from '@/containers/Privacy';
import ListDetail from '@/components/list/ListDetail';
import Qna from '@/components/company/Qna';
import Mypage from '@/containers/Mypage';
import Login from '@/components/mypage/Login';
import FindId from '@/components/mypage/FindId';
import ResetPassword from '@/components/mypage/ResetPassword';
import Register from '@/components/mypage/Register';
import Etc from '@/containers/Etc';
import ChartType01 from '@/components/etc/ChartType01';
import ChartType02 from '@/components/etc/ChartType02';
import QuickMenu from './components/etc/QuickMenu';
import ChartType03 from './components/etc/ChartType03';

/**
 * @description Router
 */

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
                path: "terms",
                element: <Terms />,
            },
            {
                path: "privacy",
                element: <Privacy />,
            },
            {
                path: "company",
                element: <Company />,
                children: [
                    {
                        path: "introduction",
                        element: <CompanyTotal />,
                    },
                    {
                        path: "member",
                        element: <Member />,
                    },
                    {
                        path: "qna",
                        element: <Qna />,
                    }

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
                    },
                    {
                        path: "listType01/:detailId",
                        element: <IntroductionListType01Detail />,
                    },
                    {
                        path: "listType02/:detailId",
                        element: <IntroductionListType02Detail />,
                    }
                ],
            },
            {
                path: "list",
                element: <List />,
                children: [
                    {
                        path: "textType",
                        element: <TextType />,
                    },
                    {
                        path: "imageType",
                        element: <ImageType />,
                    },
                    {
                        path: "textType/:detailId",
                        element: <ListDetail />,
                    },
                    {
                        path: "imageType/:detailId",
                        element: <ListDetail />,
                    },
                    
                ]
            },
            {
                path: "mypage",
                element: <Mypage />,
                children: [
                    {
                        path: "login",
                        element: <Login />,
                    },
                    {
                        path: "findid",
                        element: <FindId />,
                    },
                    {
                        path: "resetpwd",
                        element: <ResetPassword />,
                    },
                    {
                        path: "register",
                        element: <Register />,
                    },
                ]
            },
            {
                path: "etc",
                element: <Etc />,
                children: [
                    {
                        path: "barChart",
                        element: <ChartType01 />,
                    },
                    {
                        path: "etcChart",
                        element: <ChartType02 />,
                    },
                    {
                        path: "doughnutChart",
                        element: <ChartType03 />,
                    },
                    {
                        path: "quickMenu",
                        element: <QuickMenu />,
                    },
                ]
            }

        ],
        errorElement: <NotFound />
    }
])

export default router