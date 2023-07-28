import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MainLayout from '@/components/layout/MainLayout';
import GoTopButton from '@/components/commons/GoTopButton';


function App() {
  return (
    <>
      <Header/>
      <MainLayout>
        <Outlet/>
        <GoTopButton/>
      </MainLayout>
      <Footer/>
    </>
  );
}

export default App;
