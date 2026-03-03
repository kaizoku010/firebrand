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
        Over the last 10 years, I have worked withtech  startups in Uganda and a few around the world to ship cross-platform applications across React, React Native, JavaScript, and Android/Java. Experienced in building full-stack solutions, leading development teams, Passionate about performance, scalability, and creating seamless user experiences. <br/>
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
