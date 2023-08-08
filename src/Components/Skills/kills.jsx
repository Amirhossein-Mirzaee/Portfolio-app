import React from 'react'
import './skills.css'
import Frontend from './Frontend'
import Frontend2 from './Frontend2'
const Skills = () => {
  return (
    <section className='skills section' id='skills'>
      <h2 className="section__title">Skills</h2>
    <span className="section__subtitle">My Technical level</span>
    <div className="skills__container container grid">
    <Frontend/>
    <Frontend2/>
    </div>
    </section>
  )
}

export default Skills