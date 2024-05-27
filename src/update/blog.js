import React from 'react'
import '../update/blog.css'
import Zimba from '../img/zimba.png'

function blog() {
    return (
        <div className='blog-holder'>
      <div className="blog-container">
         <div className="blog-image-holder">
                <img className="blog-image" alt="blog" 
                 src={ Zimba} />
            </div>  <h1 className="coming-soon-title">
              Coming <span className="soon-span">Soon</span>
          </h1>
          <p className="coming-soon-text">
           I will be launching this feature in the very near future,.
          </p>
            </div>
           
            </div>
  )
}

export default blog