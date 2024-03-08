// import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';



function App() {
  
    return (
      <div>
        <Navbar />
        <Home />
        <About />
        <Services /> 
        <FAQ />
        <Contact />
        <Footer />
  
      </div>
    )
  }

  export default App
  