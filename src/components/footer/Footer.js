import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faQuoteRight,
  faLaptop,
  faPhone,
  faEnvelope,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";
import image from "../../images/paypal-payment-options.png";

const quoteLeft = <FontAwesomeIcon icon={faQuoteLeft} />;
const quoteRight = <FontAwesomeIcon icon={faQuoteRight} />;
const phone = <FontAwesomeIcon icon={faPhone} />;
const email = <FontAwesomeIcon icon={faEnvelope} />;
const element = <FontAwesomeIcon icon={faLaptop} />;
const copyright = <FontAwesomeIcon icon={faCopyright} />;
const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-white py-3 ">
      <p className="mt-5">
        {quoteLeft} The roots of education are bitter, but the fruit is sweet .
        {quoteRight}
      </p>
      <p> – Aristotle</p>
      <div className="row my-3">
        <div className="col-8 text-start ms-5">
          <h3>{element} LearnIT</h3>
          <p>{phone} +880 1702104511</p>
          <p>{email} learnit@learnit.com</p>
          <p>Mirpur-11,Dhaka,Bangladesh</p>
        </div>
        <div className="col-2 ">
          <img src={image} alt="" />
        </div>
      </div>
      <p>{copyright} All rights reserved by LearnIT ,2021</p>
    </div>
  );
};

export default Footer;
