import React, { useEffect } from 'react'
import SkillBox from './SkillBox.jsx'

const SkillBoard = () => {

  const skills = [
  { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' }
];

  return (
    <>
        <div id="skill" className="skill">
           
          <h1 className='text-5xl text-white z-10 text-center'>Skills</h1>
          <div className='bg-black h-2 w-full rounded' />

            <div className="skillboard">

              {skills.map((skill, index) => (
                <SkillBox key={index} logo={skill.logo} name={skill.name} />
              ))}                
            </div>
        </div>
        
    </>

  )
}

export default SkillBoard   