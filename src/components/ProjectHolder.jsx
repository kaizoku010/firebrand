import React from "react";
import Project from "./Project";
import ProjectInfo from "./ProjectInfo";
import "./ProjectHolder.css";
import projectData from "../dataPoint/AllProjects";

function ProjectHolder() {
  return (
    <ul className="project_list">
      {projectData.allProjects.map((project) => (
        <li key={project.id} className="allProject_list">
          <div
            style={{

              backgroundColor: project.backgroundColor,
              color: project.textColor,
            
            }}
            className="project_box"
          >
            <Project icon={project.icon} />

            <ProjectInfo
              title={project.title}
              desc={project.desc}
              image={project.projectImg}
              link={project.link}
              location={project.location}
              titleColor={project.textColor}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ProjectHolder;
