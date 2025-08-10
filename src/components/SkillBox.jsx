import React from 'react'

const SkillBox = (props) => {
  return (
    <>
    <div className="skillbox  ">
        <img className='skillimg' src={props.logo} alt={`${props.name} Logo`} />
        <h5>{props.name}</h5>
    </div>
    </>
  )
}

export default SkillBox