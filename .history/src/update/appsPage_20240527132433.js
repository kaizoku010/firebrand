import React from "react";
import "./appsPage.css";
import {Link} from 'react-router-dom'
import IMager from "../img/bc_ic.png";
import Chip from "../components/chips.js";
import projectsData from "../dataPoint/AllProjects.js";

function apps() {
  const desc =
    "I'll send the email regarding the restoration. Please reply the mail with the dates and the content which has to be restored. Is that okay?";
  const techString = "Android";
  const techString2 = "Wordpress";
  const techString3 = "ReactJS";
  const colorBlue = "aquamarine";

  return (
    <div className="appsHolder">
      <h1 className="appsHeading">
        Quality crafted <span className="apps-span">projects</span>
      </h1>
      <div className="sites-holder">
        <ul className="sites-list">
          {projectsData.allProjects.map((project) => (
            <li key={project.id} className="sites">
        
              <div className="top-element">
                <img className="site-logo" src={project.icon} />
                  <div className="site-text-holder">
                       <Link className='link-list' to={project.link} target="_blank">   
                    <h1 className="site-title">{project.title}</h1>
                        </Link>
                        <p>{project.location}</p>
                  <h2 className="site-desc">{project.desc}</h2>
                  <div className="chip-layout">
            
                      <li className="chip-list">
                       <Chip tech={project.techStacks} />
                    </li>
        
                    
                   
              
                  </div>
                </div>
              </div>
          
            </li>
          ))}
        </ul>
        <div className="sites"></div>
      </div>
    </div>
  );
}

export default apps;
