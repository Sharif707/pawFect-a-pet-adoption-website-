import Banner from "@/Components/Banner/Banner";
import React from "react";
import { Helmet } from "react-helmet-async";
import AboutUsSection from "../../Components/AboutUs/AboutUs";
import AdoptionCTA from "../../Components/CallToAction/AdoptionCTA";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>PawFect || Find Your Forever Friend.</title>
      </Helmet>
      <section>
        <Banner></Banner>
      </section>
      <section>
        <AboutUsSection />
      </section>
      <section>
        <AdoptionCTA />
      </section>
    </>
  );
};

export default Home;
