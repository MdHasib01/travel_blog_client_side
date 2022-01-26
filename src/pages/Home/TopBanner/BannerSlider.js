import React, { Component } from "react";
import Slider from "react-slick";
import Content1 from "./BannerContent/Content1";
import Content2 from "./BannerContent/Content2";
import Content3 from "./BannerContent/Content3";

export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    };
    return (
      <div>
        <Slider ref={(slider) => (this.slider = slider)} {...settings}>
          {/*---------------- First slider ------------------ */}
          <div>
            <Content1 slider={this.play} />
          </div>
          {/*---------------- Second slider ------------------ */}
          <div>
            <Content2 slider={this.play} />
          </div>
          {/*---------------- Third slider ------------------ */}
          <div>
            <Content3 />
          </div>
        </Slider>
      </div>
    );
  }
}
