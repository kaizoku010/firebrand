import React from "react";
import "./about.css";
import { Link } from "react-router-dom";
import Chip from "../components/chips.jsx";

function about() {

  const techStack = [
    "Java",
    "JavaScript",
    "React Native",
    "ReactJs",
    "HTML/CSS",
    "Vite",
    "next.js",
    "Tailwind",
    "Bootstrap",
    "WordPress",
  ];


  return (
    <main>
      <div className="about-container">
        <h1 className="about-title">
          <span className="about-span">About</span> me
        </h1>
        <p className="about-text">
          Hi there! My name is Dixon, kalanzi Dixon thanks for being here, i'm a software developer wit about twelve years of experience. During this time,
          I've had the pleasure of working with intresting startups and companies like, RealEVR, Willapps UG, NoniVie Uganda, Muraka Consults, Kwetu LLC, Moxie 5 Marketing Agency ,Savage Creative Africa,
          NGRB, NWM, Tinteds, L'ampeire Stores, Sekpay.<br/>
          <br/>
          Interested in working with me?, feel free to hit me up anytime. 
        </p>

        <div>
          <h2 className="about-skills-more">  </h2>
          <h3 className="about-tech-stack">Tech Stack</h3>
          <ul className="tech-stack-list">
            {techStack.map((tech, i) => (
              <li key={i} className="sites">
                <Chip tech={tech} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default about;
