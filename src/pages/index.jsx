import React from 'react';
import MainLayout from './../layout/MainLayout';
import Banner from './../components/home/Banner'

const Home = () => {
  return (
    <div>
      <Banner/>
    </div>
  );
};

export default Home;
Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>
}