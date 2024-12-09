import React from 'react'
import "./footer.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CodeIc from "../img/github-mark.png"
import IG from "../img/instagram.png"
import DeviantArt from "../img/deviantart.png"
import LinkedIn from "../img/linked.png"
// import { faInstagram } from '@fortawesome/free-brands-svg-icons'

function footer() {
  return (
    <footer class="site-footer">
      <div class="container">
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">"The people who are crazy enough to think they can change the world are the ones who do"
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
            <li><a   target='_blank' class="facebook" href="https://github.com/kaizoku010"><img  class="facebook"   src={CodeIc} /></a></li>
              </ul>
          </div>
        </div>
      </div>
</footer>
  )
}

export default footer