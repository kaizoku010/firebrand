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
import ScrollToTop from './components/ScrollToTop'
import BlogDetails from './components/BlogDetails.js'
import Mobile from "./"
// To hide specific products in a shop, you can either use built-in settings like changing "Catalog Visibility" in WooCommerce or using
//  custom code or plugins to hide products based on user roles, categories, or search. For example, in WooCommerce,
// you can set individual product "Catalog Visibility" to "Hidden", which will prevent them from appearing on the main shop page


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
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route path="/connect" element={<Connect />} />

     </Routes>
        <Footer/>
        <ScrollToTop />
      </div>

    </Router>
  )
}

export default App

