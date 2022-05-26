import React from "react";
import "./BusinessSummary.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBuilding,
  faEarth,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { CountUp } from 'use-count-up';

const BusinessSummary = () => {

    const onComplete = () => {
        return { shouldRepeat: 1, delay:3 }
      }

  const MyComponent = () => (
    <CountUp isCounting end={120} duration={5.2} onComplete={onComplete} />
  );
  const MyComponent2 = () => (
    <CountUp isCounting end={1830} duration={5.2} onComplete={onComplete} />
  );
  const MyComponent3 = () => (
    <CountUp isCounting end={27} duration={5.2} onComplete={onComplete} />
  );
  const MyComponent4 = () => (
    <CountUp isCounting end={12} duration={5.2} onComplete={onComplete} />
  );

  return (
    <div>
      <h1 className="text-4xl text-center font-semibold business-title pt-10 mt-12 mb-7"> Business Summary</h1>
      <section className="count-section ">
      
        <div className="counter-main-div container">
            
          {/* 1.......... */}
          <div className=" counter-div pb-5">
            <h1 className="font-semibold text-5xl">
              <FontAwesomeIcon className="mt-4 me-2  " icon={faBuilding} />
              {MyComponent()}
            </h1>
            <h4 className="font-semibold text-xl mt-2">Worldwide Branches</h4>
          </div>
          
          {/* 2............. */}
          <div className=" counter-div">
            <h1 className="font-semibold text-5xl">
              <FontAwesomeIcon className="mt-4 me-2" icon={faUsers} />
              {MyComponent2()}{" "}
            </h1>
            <h4 className="font-semibold text-xl mt-2">Stuffs come Family</h4>
          </div>
          
          {/* 3........... */}
          <div className=" counter-div">
            <h1 className="font-semibold text-5xl">
              <FontAwesomeIcon className="mt-4 me-2" icon={faEarth} />{" "}
              {MyComponent3()}
            </h1>
            <h4 className="font-semibold text-xl mt-2">Countries Covered</h4>
          </div>
          
          {/* 4............ */}
          <div className=" counter-div">
            <h1 className="font-semibold text-5xl">
              <FontAwesomeIcon className="mt-4 me-2" icon={faClock} />{" "}
              {MyComponent4()}
            </h1>
            <h4 className="font-semibold text-xl mt-2">Years of Experiences</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessSummary;
