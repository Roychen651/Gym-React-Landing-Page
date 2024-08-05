import React, { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

const Testimonials = () => {
  const [selectedReview, setSelectedReview] = useState(0);
  const tLen = testimonialsData.length;

  return (
    <div className="testimonials-container">
      <div className="left-t">
        <span>Testimonials </span>
        <span className="stroke-text">What They </span>
        <span>Say About Us</span>
        <span>{testimonialsData[selectedReview].review}</span>
        <span>
          <span
            style={{
              color: "#FFC107",
            }}
          >
            {testimonialsData[selectedReview].name}
          </span>{" "}
          - {testimonialsData[selectedReview].status}
        </span>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <img src={testimonialsData[selectedReview].image} alt="" />
        <div className="arrows">
          <img
            onClick={() => {
              selectedReview === 0
                ? setSelectedReview(tLen - 1)
                : setSelectedReview(selectedReview - 1);
            }}
            src={leftArrow}
            alt=""
          />
          <img onClick={()=>{
            selectedReview === tLen - 1
            ? setSelectedReview(0)
            : setSelectedReview(selectedReview + 1);
          }} src={rightArrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
