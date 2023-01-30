import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import me from './img/pp.jpg'
import ProjectHolder from './components/ProjectHolder'

// Put any other imports below so that CSS from your
// components takes precedence over default styles.import './App.css';

function App () {
  return (
    <Router>
      <div className='App'>
        <div className='content'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12'>
                <div className='profile-user-box card-box bg-custom'>
                  <div className='holder__'>
                    <span className='float-left mr-3'>
                      <img
                        src={me}
                        alt=''
                        className='thumb-lg rounded-circle'
                      />
                    </span>
                    <div className='media-body text-white'>
                      <h4 className='mt-1 mb-1 font-18'>Muneza K. Dixon</h4>
                      <p className='font-13 text-light'>
                        Frontend Developer | Android Developer | Illustrator |
                        Graphics Designer{' '}
                      </p>
                      <p className='text-light mb-0'>Uganda, Kampala</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-xl-4'>
                <div className='card-box'>
                  <h4 className='header-title mt-0'>Personal Information</h4>
                  <div className='panel-body'>
                    <p className='text-muted font-13 fire-text'>
                      Hi there, am real honored you're here...the name is Dixon,
                      self-taught developer with about 6 years of experience in
                      building scalable and responsive mobile, web applications
                      with a hint of creativity on top of all of that, though i
                      still have a lot to learn. I have worked with intresting
                      companies like Willapps UG, Savage Creative Africa, NGRB,
                      NWM, Tinteds, L'ampeire Stores, Sekpay, AkibaHub, The Wellbeing Foundation & Marshal's I.T
                      Consultants.
                      <br />
                      <br />
                      If you have any questions, please hit me up or let's
                      link-up if you want anything built.
                      <br />
                    </p>
                    <hr></hr>
                    <div className='text-left'>
                      <p className='text-muted font-13'>
                        <strong>Full Name :</strong>{' '}
                        <span className='m-l-15'>Muneza Dixon</span>
                      </p>
                      <p className='text-muted font-13'>
                        <strong>Mobile :</strong>
                        <span className='m-l-15'>(+256) 753 971 151</span>
                      </p>
                      <p className='text-muted font-13'>
                        <strong>Email :</strong>{' '}
                        <span className='m-l-15'>
                          dixontheworldvsy@gmail.com
                        </span>
                      </p>
                      <p className='text-muted font-13'>
                        <strong>Location :</strong>{' '}
                        <span className='m-l-15'>Uganda</span>
                      </p>

                      <p className='text-muted font-13'>
                        <strong>Stack :</strong>{' '}
                        <span className='m-l-5'>
                          <span
                            className='flag-icon flag-icon-us m-r-5 m-t-0'
                            title='us'
                          ></span>{' '}
                          <span>Java(Android), </span>
                        </span>
                        <span className='m-l-5'>
                          <span
                            className='flag-icon flag-icon-de m-r-5'
                            title='de'
                          ></span>
                          <span>Javascript,</span>{' '}
                        </span>
                        <span className='m-l-5'>
                          <span
                            className='flag-icon flag-icon-es m-r-5'
                            title='es'
                          ></span>
                          <span>HTML/CSS</span>{' '}
                        </span>{' '}
                      </p>

                      <p className='text-muted font-13'>
                        <strong>Frameworks and Libraries :</strong>{' '}
                        <span className='m-l-5'>
                          <span
                            className='flag-icon flag-icon-us m-r-5 m-t-0'
                            title='us'
                          ></span>{' '}
                          <span>ReactJS, Tailwind, JQuery </span>
                        </span>
                        <span className='m-l-5'>
                          <span
                            className='flag-icon flag-icon-de m-r-5'
                            title='de'
                          ></span>
                          <span>Wordpress</span>{' '}
                        </span>
                        <span className='m-l-5'>
                          <span
                            className='flag-icon flag-icon-es m-r-5'
                            title='es'
                          ></span>
                        </span>
                        <span className='m-l-5'></span>
                      </p>
                      <p className='text-muted font-13'>
                        <strong>Codebase :</strong>{' '}
                        <span className='m-l-5'>
                          <span
                            className='flag-icon flag-icon-us m-r-5 m-t-0'
                            title='us'
                          ></span>
                          <a
                            target='_blank'
                            rel='noreferrer'
                            href='https://github.com/kaizoku010'
                          >
                            <span>Github/kaizoku010</span>
                          </a>
                        </span>
                      </p>
                      <p className='text-muted font-13'>
                        <strong>Graphics :</strong>{' '}
                        <span className='m-l-5'>
                          <span
                            className='flag-icon flag-icon-us m-r-5 m-t-0'
                            title='us'
                          ></span>
                          <a
                            target='_blank'
                            rel='noreferrer'
                            href='https://instagram.com/ug.firebrand'
                          >
                            <span>ug.firebrand</span>
                          </a>
                        </span>
                      </p>
                      <p className='text-muted font-13'>
                        <strong>Illustrations:</strong>{' '}
                        <span className='m-l-5'>
                          <span
                            className='flag-icon flag-icon-us m-r-5 m-t-0'
                            title='us'
                          ></span>
                          <a
                            target='_blank'
                            rel='noreferrer'
                            href='https://www.deviantart.com/imfaceless'
                          >
                            <span>Deviant Art</span>
                          </a>
                        </span>
                      </p>
                    </div>
                    <ul className='social-links list-inline mt-4 mb-0'>
                      <li className='list-inline-item'>
                        <a
                          title=''
                          data-placement='top'
                          data-toggle='tooltip'
                          className='tooltips'
                          href='www.facebook.com'
                          data-original-title='LinkedIn'
                        >
                          <i className='fa fa-linkedIn'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className='col-xl-8'>
                <div className='card-box'>
                  <h4 className='header-title mt-0 mb-3'>Android Projects</h4>
                  <div className=''>
                    <div className=''>
                      <h5 className='text-custom'>Lead designer / Developer</h5>
                      <p className='mb-0'>
                        <a
                          target='_blank'
                          rel='noreferrer'
                          href='https://play.google.com/store/apps/details?id=com.digitalminds.android.nusu'
                        >
                          Nusu
                        </a>
                      </p>
                      <p>
                        <b>2016-2021</b>
                      </p>
                      <p className='text-muted font-13 fire-text mb-0'>
                        Nusu is a simple financial assistant that enables you or
                        your business to keep track of its finances, on what and
                        where your finances comes from by keeping an offline
                        list of various entries.
                      </p>
                    </div>
                    <hr></hr>
                    <div className=''>
                      <h5 className='text-custom'>Lead designer / Developer</h5>
                      <p className='mb-0'>
                        <a
                          target='_blank'
                          rel='noreferrer'
                          href='https://play.google.com/store/apps/details?id=com.xoGames.GunsBunnies'
                        >
                          GunBunnies
                        </a>
                      </p>
                      <p>
                        <b>2020-2021</b>
                      </p>
                      <p className='text-muted font-13 fire-text mb-0'>
                        Fight alongside the noble knight Emma to annihilate the
                        evil bunny overlord and his zombie minions...mwhaha!
                      </p>
                    </div>
                  </div>
                </div>

                <div className='card-box'>
                  <h4 className='header-title mb-3'>Web Projects</h4>
                  <div className='table-responsive'>
                    {/* projects instead of the friggin table */}
                    <div className='project-grid'>
                      <ProjectHolder />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
