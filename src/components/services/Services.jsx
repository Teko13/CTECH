import React from 'react';
import "./services.css"
import { BiBuildingHouse } from 'react-icons/bi';

const Services = () => {
    return (
        <section id='services'>
            <div className="container container__services">
                <div className="services__left">
                    <h1>10+</h1>
                    <h4> Ans d'experiences</h4>
                    <small>
                        Ctech s'appuie sur son professionalisme et une réele cultures industrielle
                        pour vous proposer la solution la mieux adapterà vos besoins. L'entreprise cumule
                        plus de 10 années d'expérience. Autant d'années à approfondir les qualifications et
                        le savoir fair du personnel, à s'adapter aux évolution des divers clients et à ce maintenir
                        au meilleur niveau de qualité.
                    </small>
                </div>
                <div className="services__right">
                    <h2>Nos solutions sont adaptées et nous fournissons des services technologiques professionnels additionnels pour notre clientèle.</h2>
                    <div className="services__cards">
                        <div className="services__card">
                            <span className='services__icon'><i class="fa-solid fa-compass-drafting"></i></span>
                            <h5>Ingenierie Civile</h5>
                            <a href="#">Plus</a>
                        </div>
                        <div className="services__card">
                            <span className='services__icon'><i class="fa-solid fa-tachograph-digital"></i></span>
                            <h5>Technologie</h5>
                            <a href="#">Plus</a>
                        </div>
                        <div className="services__card">
                            <span className='services__icon'><BiBuildingHouse /></span>
                            <h5>Immobilier</h5>
                            <a href="#">Plus</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;