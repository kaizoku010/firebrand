import React from 'react'
import "./chips.css"

function chips(props) {

  const defaultColor = ""

  
  return (
    <div style={{ backgroundColor:props.color}} className="chip">
          <p className="chip-text">
            {
              props.tech ? props.tech : "Tech Stack"
          }</p>
    </div>
  )
}

export default chips