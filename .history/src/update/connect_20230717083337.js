import React from 'react'
import './connect.css';
import Mail from '../img/email.png'
import Phone from '../img/phone.png'

function connect() {
    return (
      <div className="holder-connect">

<div className='connect-InnerClass'> 
          <h1 className="connect-title">Connect</h1>
          <div className="connect-mail-container">
              <img className="connect-mail-ic" src={Mail}/>
              <h2 className="connect-mail"><a target='blank' className="connect-link" href="mailto:dixontheworldvsy@gmail.com" >dixontheworldvsy@gmail.com</a></h2>
          </div>
          <div className="connect-mail-container">
              <img className="connect-mail-ic" src={Phone}/>
              <h2 className="connect-number">(+256)-753-971-151</h2>
              </div>
              </div>    
            </div>
  )
}

export default connect