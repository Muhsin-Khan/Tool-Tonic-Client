import React from "react";
import { Link } from "react-router-dom";
import me from "../../me/Muhsin Khan.png";

const MyPortfolio = () => {
  return (
    <div className="container">
      <div className="container w-50 mx-auto mt-20 mb-10 ">
        <img src={me} alt="" className="w-25 mb-3" />
        <h1 className="text-xl font-bold mb-2">Name: Md. Muhsin Uddin</h1>
        <h1 className="mb-2 text-lg font-medium">
          Emil:<span className="text-gray-500"> mdmuhsinuddin01@gmail.com</span>
        </h1>

        <h1 className="mb-1 mt-3 text-xl font-medium">
          Educational Background
        </h1>
        <p>
          B.Sc. in Electronics and Communication Engineering from National
          University of Bangladesh. (Waiting for result)
        </p>
        <br />
        <h1 className="text-lg font-bold mb-2">
          List of My Technologies as a Developer
        </h1>
        <ul className="list-disc ml-7">
          <li>HTML</li>
          <li>Vanilla CSS</li>
          <li>Bootstrap CSS</li>
          <li>React Bootstrap</li>
          <li>Tailwind CSS</li>
          <li>DaisyUI</li>
          <li>Vanilla JavaScript</li>
          <li>NodJs</li>
          <li>React</li>
          <li>MongoDB</li>
        </ul>
        <br />
        <h1 className="text-2xl font-bold mb-1">Some of my Projects</h1>
        {/* 1. Tech Bhandar */}

        <h1 className="text-lg font-bold mb-1">1. Tech Bhandar</h1>
        <h1 className="text-lg font-bold ml-5">
          To visit the Website clikc the Link:{" "}
          <a
            href="https://tech-bhandar.web.app/"
            target="_blank"
            className="text-lg font-bold text-blue-500"
          >
            Tech Bhandar
          </a>{" "}
        </h1>

        {/* 2. Private Gym Trainer */}
        <h1 className="text-lg font-bold mb-1 mt-3">2. Private Gym Trainer</h1>
        <h1 className="text-lg font-bold ml-5">
          To visit the Website clikc the Link:{" "}
          <a
            href="https://celadon-malabi-7b7de1.netlify.app/"
            target="_blank"
            className="text-lg font-bold  text-orange-600"
          >
            Monthly Expense Calculator{" "}
          </a>{" "}
        </h1>

        {/* Monthly Expense Calculator */}
        <h1 className="text-lg font-bold mb-1 mt-3">
          3. Monthly Expense Calculator
        </h1>
        <h1 className="text-lg font-bold ml-5">
          To visit the Website clikc the Link:{" "}
          <a
            href="https://mystifying-heyrovsky-a5c04a.netlify.app/"
            target="_blank"
            className="text-lg font-bold  text-green-700 "
          >
            Monthly Expense Calculator{" "}
          </a>{" "}
        </h1>
      </div>
    </div>
  );
};

export default MyPortfolio;
