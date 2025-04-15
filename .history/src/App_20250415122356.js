import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './update/header.js'
import HomeScreen from '././update/homescreen.js'
import AboutDixon from '././update/about.js'
import AppPage from './update/appsPage.js'
import Blog from './update/blog.js'
import Footer from '././update/footer.js'
import Connect from './update/connect'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"


function App () {
  return (
    <Router>    
      <div className=''>
      <Header/>
      <Routes>
      
       <Route path='/' element={<HomeScreen />} />
          <Route path="/apps" element={<AppPage />} />
          <Route path="/about" element={<AboutDixon />} />
          <Route path="/blog" element={<Blog />} />
          <Analytics />
          <Analytics />

          <Route path="/connect" element={<Connect />} />

     </Routes>
        <Footer/>
      </div>

    </Router>
  )
}

export default App
