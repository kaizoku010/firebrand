import 'bootstrap/dist/css/bootstrap.css';
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import me from "./img/pp.jpg"
// Put any other imports below so that CSS from your
// components takes precedence over default styles.import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">

          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="profile-user-box card-box bg-custom">
                    <div className="holder__"><span className="float-left mr-3">
                      <img src={me} alt="" className="thumb-lg rounded-circle" /></span>
                      <div className="media-body text-white">
                        <h4 className="mt-1 mb-1 font-18">Muneza K. Dixon</h4>
                        <p className="font-13 text-light">Frontend Developer | Android Developer | Illustrator | Graphics Designer </p>
                        <p className="text-light mb-0">Uganda, Kampala</p>
                      </div>
                    </div>
                                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4">
                <div className="card-box">
                  <h4 className="header-title mt-0">Personal Information</h4>
                  <div className="panel-body">
                    <p className="text-muted font-13 fire-text">Am descent at tearing things apart, but my strength lies in building stuff/tech, building scalable and responsive mobile, web applications with a touch of creativity on the UI and User Experience. I have worked with intresting companies like Willapps UG, Savage Creative Africa, NGRB, NWM, Tinteds and The Wellbeing Foundation.<br/>Lets link or hit me up if you want anything built.<br/></p>
                    <hr></hr>
                    <div className="text-left">
                      <p className="text-muted font-13"><strong>Full Name :</strong> <span className="m-l-15">Muneza Dixon</span></p>
                      <p className="text-muted font-13"><strong>Mobile :</strong><span className="m-l-15">(+256) 753 971 151</span></p>
                      <p className="text-muted font-13"><strong>Email :</strong> <span className="m-l-15">dixontheworldvsy@gmail.com</span></p>
                      <p className="text-muted font-13"><strong>Location :</strong> <span className="m-l-15">Uganda</span></p>

                      <p className="text-muted font-13"><strong>Stack :</strong> <span className="m-l-5">
                        <span className="flag-icon flag-icon-us m-r-5 m-t-0" title="us"></span> <span>Java, </span>
                      </span><span className="m-l-5"><span className="flag-icon flag-icon-de m-r-5" title="de"></span>
                          <span>Javascript,</span> </span><span className="m-l-5"><span className="flag-icon flag-icon-es m-r-5" title="es"></span>
                          <span>HTML/CSS,</span> </span> </p>

                      <p className="text-muted font-13"><strong>Frameworks and Libraries :</strong> <span className="m-l-5">
                        <span className="flag-icon flag-icon-us m-r-5 m-t-0" title="us"></span> <span>ReactJS, Angular, </span>
                      </span><span className="m-l-5"><span className="flag-icon flag-icon-de m-r-5" title="de"></span>
                          <span>Wordpress,</span> </span><span className="m-l-5"><span className="flag-icon flag-icon-es m-r-5" title="es"></span>
                          <span>MonoBehaviour</span> </span><span className="m-l-5">
                        </span>
                      </p>
                      <p className="text-muted font-13"><strong>Code Base :</strong> <span className="m-l-5">
                        <span className="flag-icon flag-icon-us m-r-5 m-t-0" title="us"></span>
                        <a target="_blank" href="https://github.com/kaizoku010">
                          <span>
                            Github/kaizoku010

                          </span>
                        </a>

                      </span>
                      </p>

                      <p className="text-muted font-13"><strong>Illustrations:</strong> <span className="m-l-5">
                        <span className="flag-icon flag-icon-us m-r-5 m-t-0" title="us"></span>
                        <a target="_blank" href="https://www.deviantart.com/imfaceless">
                          <span>
                            Deviant Art
                          </span>
                        </a>

                      </span>
                      </p>

                    </div>
                    <ul className="social-links list-inline mt-4 mb-0">
                      <li className="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Facebook"><i className="fa fa-facebook"></i></a></li>
                      <li className="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Twitter"><i className="fa fa-twitter"></i></a></li>
                      <li className="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" className="tooltips" href="" data-original-title="Skype"><i className="fa fa-skype"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>



              <div className="col-xl-8">



                <div className="card-box">
                  <h4 className="header-title mt-0 mb-3">Experience</h4>
                  <div className="">
                    <div className="">
                      <h5 className="text-custom">Lead designer / Developer</h5>
                      <p className="mb-0">
                        <a target="_blank" href="https://play.google.com/store/apps/details?id=com.digitalminds.android.nusu">


                          Nusu
                        </a>
                      </p>
                      <p><b>2016-2021</b></p>
                      <p className="text-muted font-13 fire-text mb-0">
                        Nusu is a simple financial assistant that enables you or your business to keep track of its finances,
                        on what and where your finances comes from by keeping an offline list of various entries.
                      </p>
                    </div>
                    <hr></hr>
                    <div className="">
                      <h5 className="text-custom">Lead designer / Developer</h5>
                      <p className="mb-0">
                        <a target="_blank" href="https://play.google.com/store/apps/details?id=com.xoGames.GunsBunnies">

                          GunBunnies
                        </a></p>
                      <p><b>2020-2021</b></p>
                      <p className="text-muted font-13 fire-text mb-0">Fight Alongside the noble knight Emma to annihilate the evil bunny overlord
                        and his zombie minions from the Castle.</p>
                    </div>
                  </div>


                </div>



                <div className="card-box">
                  <h4 className="header-title mb-3">My Projects</h4>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Project Name</th>
                          <th>Start Date</th>
                          <th>Due Date</th>
                          <th>Status</th>
                          <th>Assign</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>
                            <a target="_blank" href="https://naturewasteug.com/">

                              Nature Waste Management Ltd
                            </a>
                          </td>
                          <td>2022</td>
                          <td></td>
                          <td><span className="label label-info">Done</span></td>
                          <td>Firebrand</td>
                        </tr>
                        
                        <tr>
                          <td>2</td>
                          <td>
                          <a target="_blank" href="https://www.misstinted.com/">

                              MissTinted
                            </a>
                          </td>
                          <td>2022</td>
                          <td></td>
                          <td><span className="label label-warning">Done</span></td>
                          <td>Firebrand</td>

                        </tr>


                        <tr>
                          <td>3</td>
                          <td>
                            <a target="_blank" href="https://voxpopuli.ug/">

                            VOX PUPLI
                            </a>
                          </td>
                          <td>05/01/2019</td>
                          <td>13/01/2019</td>
                          <td><span className="label label-pink">Done</span></td>
                          <td>Willapps</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>
                            <a target="_blank" href="https://regentestatesltd.com">

                              Regent Estates
                            </a>
                          </td>
                          <td>01/08/2019</td>
                          <td>15/08/2019</td>
                          <td><span className="label label-purple">Done</span></td>
                          <td>Willapps</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>
                            <a target="_blank" href="http://mdparchitecture.com/">

                              MDP ARCHITECTURE SARL
                            </a>
                          </td>
                          <td>02/09/2020</td>
                          <td>17/09/2020</td>
                          <td><span className="label label-warning">Done</span></td>
                          <td>Willapps</td>

                        </tr>

                        <tr>
                          <td>6</td>
                          <td>
                            <a target="_blank" >

                              SHIA NETWORK
                            </a>
                          </td>
                          <td>2020</td>
                          <td>2020</td>
                          <td><span className="label label-warning">Done</span></td>
                          <td>Willapps</td>

                        </tr>

                        <tr>
                          <td>7</td>
                          <td>
                            <a target="_blank" >

                              VILLA KALIBU
                            </a>
                          </td>
                          <td>2020</td>
                          <td>2020</td>
                          <td><span className="label label-warning">Done</span></td>
                          <td>Willapps</td>

                        </tr>

                        <tr>
                          <td>8</td>
                          <td>
                            <a target="_blank" >

                              MOTOKA ADS
                            </a>
                          </td>
                          <td>2019</td>
                          <td>2019</td>
                          <td><span className="label label-warning">Done</span></td>
                          <td>Firebrand</td>

                        </tr>

                        <tr>
                          <td>9</td>
                          <td>
                            <a target="_blank" >

                              OGISEA
                            </a>
                          </td>
                          <td>2020</td>
                          <td>2020</td>
                          <td><span className="label label-warning">Done</span></td>
                          <td>Willapps</td>

                        </tr>

                        <tr>
                          <td>10</td>
                          <td>
                          <a target="_blank" href="http://ngb.go.ug/">
                          National Gaming Board
                            </a>
                          </td>
                          <td>2020</td>
                          <td>2020</td>
                          <td><span className="label label-warning">Done</span></td>
                          <td>Willapps</td>

                        </tr>
                        <tr>
                          <td>11</td>
                          <td>
                            <a target="_blank" href="https://www.pearlfect1998.com/">

                              PERALFECT CARE
                            </a>
                          </td>
                          <td>2020</td>
                          <td>2020</td>
                          <td><span className="label label-warning">Done</span></td>
                          <td>Willapps</td>

                        </tr>

                        <tr>
                          <td>12</td>
                          <td>
                            <a target="_blank" >

                              Dippo
                            </a>
                          </td>
                          <td>2020</td>
                          <td></td>
                          <td><span className="label label-warning">Work In Progress</span></td>
                          <td>Savage Creative Africa</td>

                        </tr>


                        <tr>
                          <td>13</td>
                          <td>
                          <a target="_blank" href="https://wuzi-app.firebaseapp.com/">

                              Wuzi
                            </a>
                          </td>
                          <td>2021</td>
                          <td></td>
                          <td><span className="label label-warning">Work In Progress</span></td>
                          <td>The Wellbeing Experience</td>

                        </tr>

                      

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>

    </Router>

  );
}


export default App;
