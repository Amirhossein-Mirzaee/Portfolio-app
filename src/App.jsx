import React from 'react'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Skills from './Components/Skills/kills'
import Services from './Components/Services/Services'
import Qualificatin from './Components/Qualification/Qualificatin'
import Contact from './Components/Contact/Contact'
import Footer from './Components/footer/Footer'
import Scrollup from './Components/Scrollup/Scrollup'
import './App.css'

const App = () => {
  return (
    <>
    <Header/>
    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Qualificatin/>
      <Contact/>
    </main>
    <Footer/>
    <Scrollup/>
    
    </>
  )
}

export default App