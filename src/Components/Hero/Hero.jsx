import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";

const transition = {
  type: 'spring',
  duration: 3
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="blur blur-h"></div>
      <div className="left-hero">
        <Header />
        <div className="the-best-fit">
          <motion.div
            initial={{ left: '238px' }}
            whileInView={{ left: '9px' }}
            transition={{...transition,type:'tween'}}
            className="motion-div"
          />
          <span>The Best GYM In The City For You ! </span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In our gym we will help you to shape and build your Ideal body and
              lifestyle that you always wanted.
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>+110</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+5829</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-hero">
        <button className="btn">Join Now</button>

        <motion.div
        transition={transition}
        whileInView={{right:"4rem"}}
        initial={{right:"-0.8rem"}}
        className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>132 BPM</span>
        </motion.div>

        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image-back" />

        <motion.div className="calories"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}>
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned </span>
            <span>220 Kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
