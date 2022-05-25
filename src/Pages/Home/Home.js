import React from 'react'
import "./Home.css";
import Banner from './Banner/Banner'
import ExtraOne from './ExtraOne/ExtraOne';
import ExtraTwo from './ExtraTwo/ExtraTwo';
import Products from '../Products/Products';
// import Header from './Header/Header'

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        
        <Products></Products>
        {/* Seperator Line */}
        <div className="d-flex align-items-center container">
        <div style={{ height: "1px" }} className="seperator-line w-100 mt-5"></div>
        </div>
        <ExtraOne></ExtraOne>
        <ExtraTwo></ExtraTwo>
        
    </div>
  )
}

export default Home 