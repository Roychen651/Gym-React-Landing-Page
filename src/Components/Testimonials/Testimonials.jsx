import React, { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [selectedReview, setSelectedReview] = useState(0);
  const tLen = testimonialsData.length;

  const transition = {
    type: 'spring',
    duration: 0.5,
  };

  return (
    <div className="testimonials-container">
      <div className="left-t">
        <span>Testimonials </span>
        <span className="stroke-text">What They </span>
        <span>Say About Us</span>
        <motion.span
          key={selectedReview}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={transition}
        >
          {testimonialsData[selectedReview].review}
        </motion.span>
        <motion.span
          key={selectedReview + "-name"}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={transition}
        >
          <span style={{ color: "#FFC107" }}>
            {testimonialsData[selectedReview].name}
          </span>{" "}
          - {testimonialsData[selectedReview].status}
        </motion.span>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <motion.img
          key={selectedReview + "-image"}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={transition}
          src={testimonialsData[selectedReview].image}
          alt=""
        />
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
          <img
            onClick={() => {
              selectedReview === tLen - 1
                ? setSelectedReview(0)
                : setSelectedReview(selectedReview + 1);
            }}
            src={rightArrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
