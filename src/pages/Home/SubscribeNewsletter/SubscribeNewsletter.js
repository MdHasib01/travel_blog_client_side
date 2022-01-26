import React from "react";
import newsLetterBack from "../../../Assects/Top_Banner/h6-rev-slide-shape.png";
import newsLetterBackDraw from "../../../Assects/newsletter/newsletter.png";
import newsletterBook from "../../../Assects/newsletter/book.png";

const SubscribeNewsletter = () => {
  return (
    <div>
      <div
        className="newsletter-background"
        style={{
          backgroundImage: `url(${newsLetterBack})`,
        }}
      >
        <div
          className="newsletter-background"
          style={{
            backgroundImage: `url(${newsLetterBackDraw})`,
          }}
        >
          <div className="container" style={{ paddingTop: "100px" }}>
            <div className="row d-flex align-items-center">
              <div className="col-md-5">
                <img src={newsletterBook} alt="" className="img-fluid" />
              </div>
              <div className="col-md-7">
                <h2
                  style={{
                    fontWeight: "bold",
                    fontSize: "2.2em",
                    textTransform: "uppercase",
                  }}
                >
                  Best money saving travell
                  <span style={{ color: "#59815b" }}> Tips!</span>
                </h2>
                <p
                  style={{ fontSize: "1.3em", color: "#797979" }}
                  className="mt-2 mb-4"
                >
                  See how I helped real readers plan, save and go on a trip of a
                  lifetime. And get actionable steps you can use to travel
                  anywhere -
                  <span style={{ color: "#f77b63" }}>
                    No matter your income and where you from
                  </span>
                </p>
                <button className="primary-btn">Subscribe now!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeNewsletter;
