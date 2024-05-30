import React from 'react';
import "./chips.css";

function Chips({ tech, color }) {
  const getColor = (tech) => {
    return tech === "Online" ? color : "red";
  };

  return (
    <div className="chip-container">
      {tech.map((item, index) => (
        <div key={index} style={{ backgroundColor: getColor(item) }} className="chip">
          <p className="chip-text">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Chips;
