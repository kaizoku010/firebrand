import React from "react";
import "./about.css";
import { Link } from "react-router-dom";
import Chip from "../components/chips.js";

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
          <span className="about-span">About</span> Kalanzi Dixon
        </h1>
        <p className="about-text">
          Hello there! I'm truly honored to have you here. My name is Dixon, and
          I'm a software developer with over twelve years of experience.
          Throughout my career, I focus on building scalable and
          responsive mobile and web applications, always infused with a touch of
          creativity.
          <br />
          <br />
          During my journey, I've had the pleasure of collaborating with
          remarkable companies such as Willapps UG, NoniVie Uganda, Muraka Consults, Kwetu LLC, Moxie 5 Marketing Agency ,Savage Creative Africa,
          NGRB, NWM, Tinteds, L'ampeire Stores, Sekpay, AkibaHub, The Wellbeing Foundation, Marshal's I.T Consultants, and Kuteesa
          Carmart. I'm excited to see what I can build with you. If you're interested in working with me, please feel free to contact me. <br />
          <br />
          Whether you have questions or need something built, just hit me up!
        </p>

        <div>
          <h2 className="about-skills-more">More </h2>
          <h3 className="about-tech-stack">Tech Stack</h3>
          <ul className="tech-stack-list">
            {techStack.map((tech, i) => (
              <li key={i} className="sites">
                <Chip  tech={tech} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default about;
