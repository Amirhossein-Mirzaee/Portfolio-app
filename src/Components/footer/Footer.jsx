import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Amirhossein Mirzaee</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#qualification" className="footer__link">Qualification</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://instagram.com/amirhossein__mirzaee?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==" target="_blanc"className="footer__social-link">
        <i className="uil uil-instagram"></i>
    </a>
    <a href="https://t.me/amirhossein_mirzaee" target="_blanc"className="footer__social-link">
    <i className="uil uil-telegram"></i>

    </a>
    <a href="https://github.com/Amirhossein-Mirzaee" target="_blanc"className="footer__social-link">
    <i className="uil uil-github-alt"></i>

    </a>
            </div>
            <span className="footer__copy">&#169; Crypticalcoder. All rights reserved</span>

        </div>
    </footer>
  )
}

export default Footer