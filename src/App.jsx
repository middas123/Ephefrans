import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';



function App() {

    return (
      <div>
        <Navbar />
        <Home />
  
      </div>
    )
  }

  export default App
  