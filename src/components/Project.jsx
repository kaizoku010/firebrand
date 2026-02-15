import React from "react";
import "./Project.css";

function Project(props) {
  return (
    <div className="project_ic_holder">
      {/* icon */}
      <img className="project_icon" alt={props.title} src={props.icon} />
    </div>
  );
}

export default Project;
