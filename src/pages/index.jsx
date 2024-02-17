import React from 'react';
import Head from 'next/head';
import MainLayout from './../layout/MainLayout';
import Banner from './../components/home/Banner';
import About from './../components/home/About';
import TopServices from './../components/home/TopServices';
import Services from './../components/home/Services';

const Home = () => {
  return (
    <div>
      <Head>
        <title>DigiMarketing Mix | Home</title>        
      </Head>
      <Banner />
      <About />
      <TopServices />
      <Services/>
    </div>
  );
};

export default Home;
Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>
}