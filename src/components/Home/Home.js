import React from "react";
import Footer from "../Footer/Footer";
import FeaturedPost from "./FeaturedPost/FeaturedPost";
import HeroSlider from "./HeroSlider/HeroSlider";
import MoreNews from "./MoreNews/MoreNews";
import Navbar from "./Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSlider />
      <FeaturedPost />
      <MoreNews />
      <Footer />
    </div>
  );
};

export default Home;
