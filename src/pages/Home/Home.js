import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../../shared/Footer/Footer";
import NavigationBar from "../../shared/NavigationBar/NavigationBar";
import HomeBlogs from "./HomeBlogs/HomeBlogs";
import SideBar from "./SideBar/SideBar";
import SubscribeNewsletter from "./SubscribeNewsletter/SubscribeNewsletter";
import TopBanner from "./TopBanner/TopBanner";
import TravelTips from "./TravelTips/TravelTips";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Travel Bea | Home</title>
        <meta name="description" content={`Travel Bea | Home`} />
      </Helmet>
      <NavigationBar />
      <TopBanner />
      <HomeBlogs />
      <TravelTips />
      <SubscribeNewsletter />
      <Footer />
    </div>
  );
};

export default Home;
