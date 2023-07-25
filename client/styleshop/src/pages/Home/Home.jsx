import React from "react";
import "./Home.scss";
import Slider from "../../components/Slider/Slider";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Categories from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      {/* we make a "type" assigment specifies the media type of link and we use it here to seperate 2 different kinds of title featured products components by featured and trending */}
      <FeaturedProducts type="featured" />
      <Categories/>
      <FeaturedProducts type="trending" />
      <Contact/>

    </div>
  );
};

export default Home;
