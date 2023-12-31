import React, { useState } from 'react'
import './services.css'

function Services() {
    const[toggleState, setToggleState] = useState(0);

    const handleToggle = (index)=>{
        setToggleState(index)
    }
  return (
    <section className='services section' id='services'>
        <h2 className="section__title">Services</h2>
    <span className="section__subtitle">What I offer</span>

    <div className="services__container container grid">
        <div className="services__content">
            <div>
                <i className="uil uil-web-grid services__icon"></i>
                <h3 className="services__title">Product <br />Designer </h3>
            </div>
            <span className="services__button" onClick={()=>handleToggle(1)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>
       <div className={toggleState === 1?"services__modal active-modal":"services__modal"}>
        <div className="services__modal-content">
            <i className="uil uil-times services__modal-close"onClick={()=>handleToggle(0)}></i>

            <h3 className="services__modal-title">Product Designer</h3>
            <p className="services__modal-discription">
                Service with more than 3 years of experience.
                Providing quality work to clients and companies.
            </p>
            <ul className="services__modal-services grid">
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                        Webpage development.
                    </p>
                </li>
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    I create UX element interactions.
                    </p>
                </li>
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    I develope the user interface.
                    </p>
                </li>
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    I position your company brand.
                    </p>
                </li>
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Design and mockups of products for companies.
                    </p>
                </li>
            </ul>
        </div>
       </div>
        </div>

        <div className="services__content">
            <div>
                <i className="uil uil-arrow services__icon"></i>
                <h3 className="services__title">UI/UX <br />Designer</h3>
            </div>
            <span className="services__button" onClick={()=>handleToggle(1)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>
       <div className={toggleState === 1?"services__modal active-modal":"services__modal"}>
        <div className="services__modal-content">
            <i className="uil uil-times services__modal-close"onClick={()=>handleToggle(0)}></i>

            <h3 className="services__modal-title">UI/UX Designer</h3>
            <p className="services__modal-discription">
                Service with more than 3 years of experience.
                Providing quality work to clients and companies.
            </p>
            <ul className="services__modal-services grid">
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                        Webpage development.
                    </p>
                </li>
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    I create UX element interactions.
                    </p>
                </li>
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    I develope the user interface.
                    </p>
                </li>
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    I position your company brand.
                    </p>
                </li>
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Design and mockups of products for companies.
                    </p>
                </li>
            </ul>
        </div>
       </div>
        </div>
        <div className="services__content">
            <div>
                <i className="uil uil-edit services__icon"></i>
                <h3 className="services__title">Visual <br />Designer</h3>
            </div>
            <span className="services__button" onClick={()=>handleToggle(1)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>
       <div className={toggleState === 1?"services__modal active-modal":"services__modal"}>
        <div className="services__modal-content">
            <i className="uil uil-times services__modal-close"onClick={()=>handleToggle(0)}></i>

            <h3 className="services__modal-title">Visual Designer</h3>
            <p className="services__modal-discription">
                Service with more than 3 years of experience.
                Providing quality work to clients and companies.
            </p>
            <ul className="services__modal-services grid">
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                        Webpage development.
                    </p>
                </li>
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    I create UX element interactions.
                    </p>
                </li>
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    I develope the user interface.
                    </p>
                </li>
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    I position your company brand.
                    </p>
                </li>
                <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                    Design and mockups of products for companies.
                    </p>
                </li>
            </ul>
        </div>
       </div>
        </div>


    </div>
    </section>
    )
}

export default Services