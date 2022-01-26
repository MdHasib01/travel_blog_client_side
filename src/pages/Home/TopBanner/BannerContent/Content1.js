import React, { useEffect } from "react";
import bannerImg1 from "../../../../Assects/Top_Banner/h6-rev-slide1.png";
import bannerBack from "../../../../Assects/Top_Banner/h6-rev-slide-shape.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Content1 = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div
        className="row top-banner-background"
        style={{
          backgroundImage: `url(${bannerBack})`,
        }}
      >
        <div data-aos="fade-right" className="col-md-8">
          <img src={bannerImg1} alt="" className="img-fluid" />
        </div>
        <div className="col-md-4 d-flex align-items-center">
          <div data-aos="fade-left" className="top-banner-text">
            <h2 className="top-banner-head">STEP INTO THE UNKNOWN</h2>
            <p className="mt-2 mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptas, corrupti?
            </p>
            <button className="primary-btn">Read more &#10132;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content1;
