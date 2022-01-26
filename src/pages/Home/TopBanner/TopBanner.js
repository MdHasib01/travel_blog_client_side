import React from "react";
import BannerSlider from "./BannerSlider";
import bannerImg1 from "../../../Assects/Top_Banner/h6-rev-slide2.png";
import bannerBack from "../../../Assects/Top_Banner/h6-rev-slide-shape.png";
const TopBanner = () => {
  return (
    <div>
      <div className="containers container">
        <BannerSlider />
      </div>
    </div>
  );
};

export default TopBanner;
