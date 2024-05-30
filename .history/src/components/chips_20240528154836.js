import React from 'react';
import "./chips.css";

function Chips(props) {
  console.log("Props received by Chips component:", props);

  const getColor = (tech) => {
    return tech === "Online" ? props.color : "red";
  };

  return (
    <div className="chip-container">
      {props.tech.map((tech, index) => (
        <div key={index} style={{ backgroundColor: getColor(tech) }} className="chip">
          <p className="chip-text">
            {tech}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Chips;
