import './contact.css';
import { BsWhatsapp } from 'react-icons/bs';
import { SiGmail } from "react-icons/si";
import { BsMessenger } from "react-icons/bs"
import Partener from '../partener/Partener';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lisyh3g', 'template_hetjcxg', form.current, 'gHy3OMgHyUli2wldS')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
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
                        <li><a href="https://wa.me/message/XJMOS4FXBICLN1"><BsWhatsapp /></a></li>
                        <li><a href="mailto:kycredo@gmail.com"><SiGmail /></a></li>
                        <li><a href="https://m.me/credo.yaovi.96"><BsMessenger /></a></li>
                    </ul>
                    <br />
                    <span>
                        03BP300 AGOE NYIVE LOMÉ, TOGO
                    </span> <br />
                    <i>
                        NIF 1001784649<br />
                        RCCM:TG-LFW-01-2022-A10-00686<br />
                        CNSS:474809
                    </i>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="name">
                        <label htmlFor="name">Nom</label>
                        <input type="text" id='name' name='nom' placeholder='Votre nom complet' />
                    </div>
                    <div className="email">
                        <label htmlFor="Email">E-mail</label>
                        <input type="email" name='email' id='email' placeholder='Votre mail' />
                    </div>
                    <div className="message">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" placeholder='Votre message' rows="6"></textarea>
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

