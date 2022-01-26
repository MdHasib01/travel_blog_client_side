import React, { useEffect, useState } from "react";
import tipsBack from "../../../Assects/Top_Banner/h6-rev-slide-shape.png";
import EventNoteIcon from "@mui/icons-material/EventNote";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const TravelTips = () => {
  const [tips, setTips] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/allblogs")
      .then((res) => res.json())
      .then((data) => setTips(data));
  }, []);
  return (
    <div className="container">
      <h2
        className="text-center"
        style={{
          fontWeight: "bold",
          fontSize: "2.5em",
        }}
      >
        TRAVELS ESSENTIAlS{" "}
        <span
          style={{
            color: "#59815b",
            backgroundImage: `url(${tipsBack})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            width: "50px",
            height: "50px",
          }}
        >
          TIPS
        </span>
      </h2>

      {/* 1st tips blog post  */}
      {tips
        .filter((item, index) => index === 0)
        .map((tip) => (
          <div>
            <div className="row mb-5">
              <div className="col-md-6">
                <img
                  src={`data:image/png;base64,${tip.image}`}
                  alt=""
                  className="img-fluid"
                  height="500px"
                />
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div>
                  <div className="d-flex">
                    <p className="me-5" style={{ color: "gray" }}>
                      <EventNoteIcon /> <i>{tip.time.slice(0, 15)}</i>
                    </p>
                    <p style={{ color: "gray" }}>
                      <BorderColorIcon /> <i>by {tip.blogger}</i>
                    </p>
                  </div>
                  <h3 style={{ fontWeight: "bold" }}>{tip.title}</h3>
                  <p
                    style={{ color: "gray" }}
                    dangerouslySetInnerHTML={{
                      __html: tip.blogsDetails.slice(0, 250),
                    }}
                  ></p>
                  <button className="primary-btn">Read More &#10132;</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      {/* 2nd tips blog post  */}
      {tips
        .filter((item, index) => index === 1)
        .map((tip) => (
          <div>
            <div className="row mb-5">
              <div className="col-md-6 d-flex align-items-center">
                <div>
                  <div className="d-flex">
                    <p className="me-5" style={{ color: "gray" }}>
                      <EventNoteIcon /> <i>{tip.time.slice(0, 15)}</i>
                    </p>
                    <p style={{ color: "gray" }}>
                      <BorderColorIcon /> <i>by {tip.blogger}</i>
                    </p>
                  </div>
                  <h3 style={{ fontWeight: "bold" }}>{tip.title}</h3>
                  <p
                    style={{ color: "gray" }}
                    dangerouslySetInnerHTML={{
                      __html: tip.blogsDetails.slice(0, 239),
                    }}
                  ></p>
                  <button className="primary-btn">Read More &#10132;</button>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  src={`data:image/png;base64,${tip.image}`}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TravelTips;
