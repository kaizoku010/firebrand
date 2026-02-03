import React from "react";
import UserImage from "../img/pp.jpg";
import "./homescreen.css";
import { Link } from "react-router-dom";
import CodeIc from "../img/code-ic.png";
import ProjectIc from "../img/project-ic.png";

function homescreen() {
  return (
    <div class="homepage">
      <main className="main-content">
        <img id="userImage" src={UserImage} />
        <h1 className="userName">Kalanzi Dixon</h1>
        <h2 className="userRole"> Software Developer</h2>
        <div className="site-holder">
          <Link to="/apps">
            <button id="btn-projects">
              <img className="project-ic" src={ProjectIc} />
              Projects
            </button>
          </Link>

          <Link rel="n" target="_blank" to="https://github.com/kaizoku010">
            <button id="btn-code">
              <img className="project-ic" src={CodeIc} />
              Code
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default homescreen;
