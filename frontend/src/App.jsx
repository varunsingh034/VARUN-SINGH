import { useState } from 'react'
import './assets/css/style.css'
import CustomMouse from './components/CustomMouse.jsx'
import Background from './components/Background.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Profile from './components/Profile.jsx'
import NavBar from './components/NavBar.jsx'
import AboutMe from './components/AboutMe.jsx'


function App() {
    return (
        <>
        <CustomMouse/>
        <Background/>
        <NavBar />
       
        <div className="center">
        
            <Profile />

            <AboutMe />


             

        
        </div>
        </>
    )
}

export default App
