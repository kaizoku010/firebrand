import React from "react";
import "./about.css";
import { Link } from "react-router-dom";
import Chip from "../components/chips.jsx";

function about() {

  const techStack = [
    "Java",
    "Python",
    "JavaScript"
  ];


  return (
    <main>
      <div className="about-container">
        <h1 className="about-title">
          <span className="about-span">About</span> me
        </h1>
        <p className="about-text">
I am a self-taught software developer with about ten years of exprience, around forty shipped products. Most of it has been end-to-end product engineering web, mobile, APIs, a couple of npm packages but where I keep gravitating toward are the systems underneath.
<br/>          
Currently am learning distributed storage, cluster orchestration and data pipelines, and looking for work where that's the job rather than the thing around the edges.

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
