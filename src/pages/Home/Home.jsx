import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import RecentWork from "../../components/RecentWork/RecentWork";
import Services from "../../components/Services/Services";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <Hero />
      <hr className="section-divider"></hr>
      <RecentWork id="portfolio" />
      <hr className="section-divider"></hr>
      <Services id="services" />
      <Footer id="contact" />
    </div>
  );
};

export default Home;
