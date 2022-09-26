import React from 'react';
import './Pagehead.css';
import { GrFacebook } from 'react-icons/gr';
import { BsLinkedin } from 'react-icons/bs';



const Pagehead = () => {
    return (
        <div className="head">
            <div className='container head__container'>
                <div className="head__left">
                    <div>
                        <h3>Bienvenue chez</h3>
                        <h1>Credo<br /> technologie</h1>
                        <p>
                            Nous somme spécialiser dans l'intégration et la gestion de projets d'ingénierie civile, d'immobilier et de technologie.
                        </p>
                        <a href="#contact" className='btn btn-primary btn-lg'>CONTACT</a>
                    </div>
                </div>
                <div className="head__right">
                    <div className="head__right-bg"></div>
                    <ul className="head__right-socials">
                        <li><a href="https://www.facebook.com/ycredo/" target="_blank"><GrFacebook /></a></li>
                        <li><a href="https://www.linkedin.com/in/cr%C3%A9do-yaovi-kokodoko-a00a6a97" target="_blank"><BsLinkedin /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Pagehead;