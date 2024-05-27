import React from "react";
import "./about.css";
import { Link } from "react-router-dom";
import Chip from "../components/chips.js";

function about() {

  const techStack = [
    "Java(Android)",
    "Javascript",
    "ReactJs",
    ".NetCore",
    "HTML/CSS",
    "Tailwind",
    "Bootstrap",
    "WordPress",
  ];


  return (
    <main>
      <div className="about-container">
        <h1 className="about-title">
          <span className="about-span">About</span> Muneza Dixon
        </h1>
        <p className="about-text">
          Hello there! I'm truly honored to have you here. My name is Dixon, and
          I'm a self-taught developer with over six years of experience.
          Throughout my career, I have focused on building scalable and
          responsive mobile and web applications, always infused with a touch of
          creativity. Although I have achieved a lot, I believe there is always
          room for growth and learning.
          <br />
          <br />
          During my journey, I've had the pleasure of collaborating with
          remarkable companies such as Willapps UG, Savage Creative Africa,
          NGRB, NWM, Tinteds, L'ampeire Stores, Sekpay,{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.akibahub.com"
          >
            AkibaHub
          </a>
          , The Wellbeing Foundation, Marshal's I.T Consultants, and Kuteesa
          Carmart. I'm excited to see what I can build with you. If you're
          interested in working with me, please feel free to contact me. I'm
          also available for freelance work. <br />
          <br />
          Whether you have questions or need something built, I'm here to assist
          you. Feel free to reachout!{" "}
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
