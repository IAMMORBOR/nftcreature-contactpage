import React from "react";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <div className="container">
      <div className="mobile">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/privacy-policies">Privacy Policies</a>
          </li>
          <li>
            <a href="/contact-us">Contact us</a>
          </li>
          <li>
            <a href="/faq-help">FAQs/Help</a>
          </li>
          <li>
            <a href="/terms-of-use">Terms of Use</a>
          </li>
          <li>
            <a href="contributors">Contributors</a>
          </li>
        </ul>
      </div>
      <div className="desktop">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/contact-us">Contact us</a>
          </li>
          <li>
            <a href="/terms-of-use">Terms of Use</a>
          </li>
          <li>
            <a href="/privacy-policies">Privacy Policies</a>
          </li>
          <li>
            <a href="/contributors">Contributors</a>
          </li>

          <li>
            <a href="/faq-help">FAQs/Help</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
