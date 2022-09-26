import React from 'react';
import './contact.css';
import { BsWhatsapp } from 'react-icons/bs';
import { SiGmail } from "react-icons/si";
import { BsMessenger } from "react-icons/bs"
import Partener from '../partener/Partener';

const Contact = () => {
    return (
        <section id='contact'>
            <div className="container container__contact">
                <div className="contact__left">
                    <h2>
                        Prendre contact
                    </h2>
                    <p>
                        +228 90 73 75 98 <br />
                        +228 90 44 49 93 <br />
                        +228 79 76 17 04 <br />
                        kycredo@gmail.com
                    </p>
                    <ul className="contact__socials">
                        <li><a href=""><BsWhatsapp /></a></li>
                        <li><a href="mailto:kycredo@gmail.com"><SiGmail /></a></li>
                        <li><a href="#"><BsMessenger /></a></li>
                    </ul>
                </div>
                <form action="">
                    <div className="name">
                        <label htmlFor="name">Nom</label>
                        <input type="text" id='name' name='Nom' placeholder='Votre nom complet' />
                    </div>
                    <div className="email">
                        <label htmlFor="Email">E-mail</label>
                        <input type="email" name='email' id='email' placeholder='Votre mail' />
                    </div>
                    <div className="message">
                        <label htmlFor="message">Message</label>
                        <textarea name="Message" id="message" placeholder='Votre message' rows="6"></textarea>
                    </div>
                    <button type='submit' className='btn black'>Envoyer</button>
                </form>
            </div>
            <div className="container partener">
                <Partener />
            </div>
        </section>
    );
};

export default Contact;