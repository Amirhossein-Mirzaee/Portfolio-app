import React from 'react'

const Info = () => {
  return (
    <div className='about__info grid'>
        <div className="about__box">
            <i className="uil uil-award about__icon"></i>
            <h3 className="about__title">Experiences</h3>
            <span className="about__subtitle">Selfstudy</span>
        </div>
        <div className="about__box">
            <i className="uil uil-bag-alt about__icon"></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">48 + Projects</span>
        </div>  
        <div className="about__box">
        <i class="uil uil-comment-question about__icon"></i>
                    <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>
    </div>
  )
}

export default Info