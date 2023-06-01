import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import router from './router';
import { GlobalStyle } from '@/resources/styles/GlobalStyle';
import "@/resources/styles/slider.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
    <GlobalStyle/>
  </React.StrictMode>
);


