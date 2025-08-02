import { useState } from 'react'
import './assets/css/style.css'
import CustomMouse from './components/CustomMouse.jsx'
import Background from './components/Background.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Profile from './components/Profile.jsx'


function App() {
    return (
        <>
        <CustomMouse/>
        <Background/>
        <div className="center">
        

            <Profile />

             

        
        </div>
        </>
    )
}

export default App
