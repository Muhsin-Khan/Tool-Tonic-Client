import React from 'react'
import './ExtraOne.css'
import ima1 from '../../../extra1img/1.jpg';
import ima2 from '../../../extra1img/2.jpg';
import ima3 from '../../../extra1img/3.jpg';


const ExtraOne = () => {
  return (
    <div className='container'>
        <h1 className='text-center mt-4' >A Glimpse of <span className='tool-tonic-title'>Tool Tonic</span></h1>
      <div className='row extraOne container d-flex justify-content-center ps-3 pe-3 pb-5 pt-2 mx-auto'>
          <div className='col col-sm col-md-4  extra-child-div'>
              <img className='img-responsive img-fluid extra1-image' src={ima1} alt="" />
              <div className='extra1-text'>
              <h4>Upcomeing Productions</h4>
              <p>We are updating our machineries in regular basis. We look forward for better experience of our users and buyiers so they are always happy with useful products. We almost rach every nook and cronoy all over the world. We try to give us our level best.</p>
              </div>
          </div>
          <div className='col col-sm col-md-4 extra-child-div'>
          <img className='img-responsive img-fluid extra1-image' src={ima2} alt="" />
              <div className='extra1-text'>
              <h4>Cautions before releasing to the Market</h4>
              <p>We care for our product users, that's why we always keep testing the products before going to customer's hands. So user may get an smooth tool and can use with top comfort. This is our concern.</p>
              </div>
          </div>
          <div className='col col-sm col-md-4 extra-child-div'>
          <img className='img-responsive img-fluid extra1-image' src={ima3} alt="" />
              <div className='extra1-text'>
              <h4>Management</h4>
              <p>Our stuffs and managing body manage the whole program in fantastic environment with hourmoney that's why we all work togather with joy and a energetic mood which produce an awesom quality in every sector from us.</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default ExtraOne