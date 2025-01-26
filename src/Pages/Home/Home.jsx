import Banner from "@/Components/Banner/Banner";
import React from "react";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <header>
      <Helmet>
        <title>PawFect || Find Your Forever Friend.</title>
      </Helmet>
      <Banner></Banner>
    </header>
  );
};

export default Home;
