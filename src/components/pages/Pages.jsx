import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router  } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Pricing from "../pricing/Pricing"
import Blog from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
       
        <Home />
        <About />
        <Services />
        <Blog />
        <Pricing />
        <Contact />
        <Footer />
      </Router>
    </>
  )
}

export default Pages