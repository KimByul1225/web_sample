import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import router from './router';
import { GlobalStyle } from '@/resources/styles/GlobalStyle';
import "@/resources/styles/slider.css";

import { RecoilRoot } from 'recoil';
import ConfirmModal from './components/commons/modal/ConfirmModal';
import AlertModal from './components/commons/modal/AlertModal';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RecoilRoot>
    <RouterProvider router={router} /> 
    <ConfirmModal/>
    <AlertModal/>
    <GlobalStyle/>
  </RecoilRoot>
);


