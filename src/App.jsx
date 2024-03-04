// import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import FAQ from './components/FAQ/FAQ';



function App() {

    return (
      <div>
        <Navbar />
        <Home />
        <About />
        <Services /> 
        <FAQ />
  
      </div>
    )
  }

  export default App
  