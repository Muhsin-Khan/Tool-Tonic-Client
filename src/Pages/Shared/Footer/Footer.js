import React from "react";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="footer footer-style d-flex flex-column content-center items-center py-10">
      <h3 className="footer-heading  max-h-0 pb-4 text-4xl font-bold "> Tool Tonic {year}</h3>
      <h6 className="copyright  my-0 max-h-0  text-lg font-bold "> Copyright © {year} Tool Tonic</h6>
      <h6 className="font-style my-0 max-h-0 mb-13  text-lg font-bold">All rights reserved</h6>
    </div>
  );
};

export default Footer;