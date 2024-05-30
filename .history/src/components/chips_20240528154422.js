import React from 'react';
import "./chips.css";

function Chips(props) {
  const defaultColor = props.tech === "Online" ? props.color : "red";
  
  return (
    <div style={{ backgroundColor: defaultColor }} className="chip">
      <p className="chip-text">
        {props.tech ? props.tech : "Tech Stack"}
      </p>
    </div>
  );
}

export default Chips;
