import React, { useRef } from "react";
import "./Join.css";
import emailjs from '@emailjs/browser';

const Join = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_ich77qq', 'template_5wnkqot', form.current, {
            publicKey: 'k9TBLLCY9Hii0jsko',
          })
          .then(
            () => {
              alert('SUCCESS!');
            },
            (error) => {
              alert('FAILED...', error.text);
            },
          );
      };
    

  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">Ready To </span>
          <span>Level UP </span>
        </div>
        <div>
          <span>Your Body</span>
          <span className="stroke-text"> With Us?</span>
        </div>
      </div>
      <div className="right-j">
        <form  ref={form} action="" className="email-container" onSubmit={sendEmail}>
            <input type="email" placeholder="Enter Your Mail" name="user_email" />
            <button className="btn btn-join">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
