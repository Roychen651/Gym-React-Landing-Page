import React, { useState, useEffect } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [selectedReview, setSelectedReview] = useState(0);
  const tLen = testimonialsData.length;

  const transition = {
    type: 'spring',
    duration: 0.5,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedReview(prev => (prev === tLen - 1 ? 0 : prev + 1));
    }, 3000); // Change testimonial every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [tLen]);

  return (
    <div className="testimonials-container" id="testimonials">
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
      </div>
    </div>
  );
};

export default Testimonials;
