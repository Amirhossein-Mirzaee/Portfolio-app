import React, { useState } from 'react'
import "./qualificatin.css"

const Qualificatin = () => {

    const [toggle, setToggle] = useState(1);

    const handleToggle = (index) => {
        setToggle(index)
       
    }
  return (
    <section className='qualification section' id='qualification'>
<h2 className="section__title">Qualification</h2>
  <span className="section__subtitle">My Personal journey</span>
<div className="qualification__container container">
    <div className="qualification__tabs">
        <div className={toggle === 1?'button--flex':'qualification__button button--flex'}onClick={()=>handleToggle(1)}>
            <i className="uil uil-graduation-cap qualification__icon"></i>Education{""}
        </div>
        <div className={toggle === 2?'button--flex':'qualification__button button--flex'}onClick={()=>handleToggle(2)}>
            <i className="uil uil-briefcase-alt qualification__icon"></i>Experience{""}
        </div>
    </div>

    <div className="qualification__sections">
        <div className={toggle === 1 ? "qualification__content qualification__content-active":"qualification__content"}>
            <div className="qualification__data">
                <div></div>
            <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
            </div>
            <div>
                <h3 className="qualification__title">Web Design</h3>
                <span className="qualification__subtitle">Tehran</span>
                <div className="qualification__calender">
                    <i className="uil-calendar-alt">2021 - Present</i>
                </div>
            </div> 
            </div>
            <div className="qualification__data">
                <div></div>
            <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
            </div>
            <div>
                <h3 className="qualification__title">After Effect</h3>
                <span className="qualification__subtitle">Tehran - Selfstudy</span>
                <div className="qualification__calender">
                    <i className="uil-calendar-alt">2020</i>
                </div>
            </div> 
            </div>
            <div className="qualification__data">
                <div></div>
            <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
            </div>
            <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">Tehran - Selfstudy</span>
                <div className="qualification__calender">
                    <i className="uil-calendar-alt">2022 - Present</i>
                </div>
            </div> 
            </div>
            <div className="qualification__data">
                <div></div>
            <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
            </div>
            <div>
                <h3 className="qualification__title">Real Estate</h3>
                <span className="qualification__subtitle">Tehran</span>
                <div className="qualification__calender">
                    <i className="uil-calendar-alt">2021 - 2022</i>
                </div>
            </div> 
            </div>
        </div>
        <div className={toggle === 2 ? "qualification__content qualification__content-active"&&"qualification__activasion":"qualification__content"}>
            <div className="qualification__data">
                <div></div>
            <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
            </div>
            <div>
                <h3 className="qualification__title">Web Design</h3>
                <span className="qualification__subtitle">Tehran</span>
                <div className="qualification__calender">
                    <i className="uil-calendar-alt">2021 - Present</i>
                </div>
            </div> 
            </div>
            <div className="qualification__data">
                <div></div>
            <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
            </div>
            <div>
                <h3 className="qualification__title">Product Designer</h3>
                <span className="qualification__subtitle">Tehran - Selfstudy</span>
                <div className="qualification__calender">
                    <i className="uil-calendar-alt">2020</i>
                </div>
            </div> 
            </div>
            <div className="qualification__data">
                <div></div>
            <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
            </div>
            <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">Tehran - Selfstudy</span>
                <div className="qualification__calender">
                    <i className="uil uil-calendar-alt">2022 - Present</i>
                </div>
            </div> 
            </div>
          
        </div>
    </div>
</div>

  </section>
  )
}

export default Qualificatin