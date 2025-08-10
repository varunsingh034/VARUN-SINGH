import './assets/css/style.css'
import CustomMouse from './components/CustomMouse.jsx'
import Background from './components/Background.jsx'
import Profile from './components/Profile.jsx'
import NavBar from './components/NavBar.jsx'
import AboutMe from './components/AboutMe.jsx'
import SkillBoard from './components/SkillBoard.jsx'

function App() {
    return (
        <>
        <CustomMouse/>
        <Background/>
        <NavBar />
       
        <div className="center">
        
            <Profile />

            <AboutMe />

            <SkillBoard />
             

        
        </div>
        </>
    )
}

export default App
