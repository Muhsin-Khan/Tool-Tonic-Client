import React from "react";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="footer footer-style">
      <h3 className="footer-heading"> Tool Tonic {year}</h3>
      <p className="copyright"> Copyright © {year} Tool Tonic</p>
      <p className="font-style">All rights reserved</p>
    </div>
  );
};

export default Footer;