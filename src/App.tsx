import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MainLayout from '@/components/layout/MainLayout';


function App() {
  return (
    <>
      <Header/>
      <MainLayout>
        <Outlet/>
      </MainLayout>
      <Footer/>
    </>
  );
}

export default App;
