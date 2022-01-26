import React from "react";
import HomeBlogs from "./HomeBlogs/HomeBlogs";
import SubscribeNewsletter from "./SubscribeNewsletter/SubscribeNewsletter";
import TopBanner from "./TopBanner/TopBanner";
import TravelTips from "./TravelTips/TravelTips";

const Home = () => {
  return (
    <div>
      <TopBanner />
      <HomeBlogs />
      <TravelTips />
      <SubscribeNewsletter />
    </div>
  );
};

export default Home;
