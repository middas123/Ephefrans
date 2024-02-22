import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import About from './components/About/About'



function App() {

    return (
      <div>
        <Navbar />
        <Home />
        <About />
  
      </div>
    )
  }

  export default App
  