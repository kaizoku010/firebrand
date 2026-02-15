import React from 'react'
import "./chips.css"

function Chips({ tech, color }) {
  // Determine icon based on tech status
  const getStatusIcon = () => {
    if (tech === "Online") return "🟢";
    if (tech === "Under Maintenance") return "🔧";
    return "💻";
  };

  return (
    <div
      style={{ backgroundColor: color }}
      className="chip"
    >
      <span className="chip-icon">{getStatusIcon()}</span>
      <span className="chip-text">{tech || "Tech Stack"}</span>
    </div>
  )
}

export default Chips