import React from 'react'
import AboutMeCardEdu from './AboutMeCardEdu.jsx'

const AboutMe = () => {
  return (
  <>
    <div id='about' className='about bg-blue-500'>

      <h1 className='text-5xl text-white z-10 text-center'>About Me</h1>
      <div className='bg-black h-2 w-full rounded' />

      <div className='about-inner bg-white'>

        <div className="about-info bg-red-500 h-40 w-40">

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id tenetur deleniti iure. Modi minus at est numquam deserunt expedita eveniet ullam, recusandae quae vel aliquam assumenda dicta laborum ad repellendus facilis dolorum aliquid laboriosam quas tempora? Eaque at sapiente quo eum quibusdam, temporibus, mollitia accusantium nobis, inventore quod quos? Deleniti.</p>




        </div>


        <div className="about-exp bg-amber-400 h-40 w-40">

          <AboutMeCardEdu title='Education' institute='Arya Institute of Engineering & Technology' branch='Computer Science and Engineering' cgpa='7.55'/>

        




        </div>









          


      
      </div>

    </div>
  </>
  )
}

export default AboutMe