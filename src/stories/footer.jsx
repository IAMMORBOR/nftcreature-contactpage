import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="container">
      <div className="mobile">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/privacy">Privacy Policies</a>
          </li>
          <li>
            <a href="/contact">Contact us</a>
          </li>
          <li>
            <a href="/FAQ">FAQs/Help</a>
          </li>
          <li>
            <a href="/terms">Terms of Use</a>
          </li>
          <li>
            <a href="/contributors">Contributors</a>
          </li>
        </ul>
      </div>
      <div className="desktop">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/contact">Contact us</a>
          </li>
          <li>
            <a href="/terms">Terms of Use</a>
          </li>
          <li>
            <a href="/privacy">Privacy Policies</a>
          </li>
          <li>
            <a href="/contributors">Contributors</a>
          </li>

          <li>
            <a href="/FAQ">FAQs/Help</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
