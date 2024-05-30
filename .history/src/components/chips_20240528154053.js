import React from 'react'
import "./chips.css"

function chips(props) {

  
  console.log(props)
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