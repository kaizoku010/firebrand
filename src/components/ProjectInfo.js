import React from 'react'
import { Link } from 'react-router-dom'
import Pin from '../img/location_pin.svg'
import './ProjectInfo.css'

function ProjectInfo (props) {
  return (
    <div className='project-info'>
      {/* project Name */}
      <img className='project_img' src={props.image} alt={props.title} />
      <a
        target='_blank'
        className='project_link'
        rel='noopener noreferrer'
        href={props.link}
      >
        <h5 className='project_title'>{props.title}</h5>
        <div className='location_holder'>
          <img className='location_pin' alt='location icon' src={Pin} />
          <p style={{ color: props.titleColor }} className='project_location'>
            {props.location}
          </p>
        </div>
      </a>
      <div className='project_spacing' />
      {/* project Description */}
      <p className='project_description font-13'>{props.desc}</p>

      {/* <Link to={props.link}>
      <button className="open_project">Learn More</button>
      </Link> */}
    </div>
  )
}

export default ProjectInfo
