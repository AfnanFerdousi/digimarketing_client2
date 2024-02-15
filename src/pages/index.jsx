import React from 'react';
import Head from 'next/head';
import MainLayout from './../layout/MainLayout';
import Banner from './../components/home/Banner';
import About from './../components/home/About';

const Home = () => {
  return (
    <div>
      <Head>
        <title>DigiMarketing Mix | Home</title>        
      </Head>
      <Banner />
      <About />
    </div>
  );
};

export default Home;
Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>
}