import React from "react";
import "./appsPage.css";
import { Link } from 'react-router-dom';
import Chip from "../components/chips.js";
import projectsData from "../dataPoint/AllProjects.js";

function Apps() {
  return (
    <div className="appsHolder">
      <h1 className="appsHeading">
        Quality crafted <span className="apps-span">projects</span>
      </h1>
      <div className="sites-holder">
        <ul className="sites-list">
          {projectsData.allProjects.map((project) => (
            <li key={project.id} className="sites">
              <Link className='link-list' to={project.link} target="_blank">
                <div className="top-element">
                  <img className="site-logo" src={project.icon} alt={`${project.title} logo`} />
                  <div className="site-text-holder">
                    <h1 className="site-title">{project.title}</h1>
                    <p>{project.location}</p>
                    <h2 className="site-desc">{project.desc}</h2>
                    <div className="chip-layout">
                      <Chip tech={project.techStacks} color="aquamarine" />
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="sites"></div>
      </div>
    </div>
  );
}

export default apps;
