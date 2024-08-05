import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import white_tick from "../../assets/whiteTick.png";

const Plans = () => {
  return (
    <div className="plans-container" id="plans">
  
      <div className="programs-header">
        <span className="stroke-text">Ready To Start</span>
        <span>Your Journey</span>
        <span className="stroke-text">Now With Us</span>
      </div>
      <div className="plans">
        {plansData.map((plan, index) => (
          <div className="plan" key={index}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>
            <div className="features">
              {plan.features.map((feature, index) => (
                <div className="feature" key={index}>
                  <img src={white_tick} alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See More Benefits </span>
            </div>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
