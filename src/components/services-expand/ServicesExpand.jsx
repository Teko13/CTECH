import React, { useState } from 'react';
import './servicesExpand.css';
import BATIMENT from "../../assets/construction-bg.jpg"
import TECH from "../../assets/tech-bg.png"
import IMMOBILIER from "../../assets/immobilier-bg.jpg"


const ServicesExpand = () => {
    const [deploy, setDeploy] = useState('no')
    return (
        <section id="services-expand">
            <div className="container container__services-expand">
                <div className="services-expand__head">
                    <h3>Nous vous offrons un rapport qualité-prix
                        défiant toute concurences
                    </h3>
                    <div className="services-expand__head-right">
                        <p>
                            Nous fournissons des produits et des services
                            innovateurs qui contribuent au développement
                            technologique, économique et durable.
                        </p>
                        <a href="#contact">En savoir plus</a>
                    </div>
                </div>
                <div className="services-expand__cards">
                    <article className="services-expand__card">
                        <span className="services-expand__card-img building">
                            <div className={deploy === "yes" ?
                                "services-expand__card-img-title hide" : "services-expand__card-img-title"}>
                                <h2>Ingénierie Civile</h2>
                            </div>
                            <div className={deploy === "yes" ?
                                "services__block display" : "services__block"}>
                                <div className="services-expand__card-img__infos batiments">
                                    <h4>Batiment</h4>
                                    <ul className='services-list'>
                                        <li>
                                            <h5>Travaux de rénovation.</h5>
                                        </li>
                                        <li>
                                            <h5>Immeubles d’habitation.</h5>
                                        </li>
                                        <li>
                                            <h5>Immeubles de prestige, résidence.</h5>
                                        </li>
                                        <li>
                                            <h5>Edifices publics.</h5>
                                        </li>
                                        <li>
                                            <h5>Bâtiments commerciaux et industriels.</h5>
                                        </li>
                                    </ul>
                                </div>
                                <div className="services-expand__card-img__infos expertises">
                                    <h4>Expertises Technique</h4>
                                    <ul className='services-list'>
                                        <li>
                                            <h5>Elaboration de documents d’appel d’offre.</h5>
                                        </li>
                                        <li>
                                            <h5>Etude technique de projets genie civils.</h5>
                                        </li>
                                        <li>
                                            <h5>Elaboration de plans graphiques.</h5>
                                        </li>
                                        <li>
                                            <h5>Edifices publics.</h5>
                                        </li>
                                    </ul>
                                </div>
                                <div className="services-expand__card-img__infos gestion">
                                    <h4>Gestion</h4>
                                    <ul className='services-list'>
                                        <li>
                                            <h5>Control techniques et suivis de projets genies civils</h5>
                                        </li>
                                        <li>
                                            <h5>Estimation des couts et elaboration des devis.</h5>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </span>
                        <div className="services-expand__card-deploy">
                            <button onClick={() => {
                                if (deploy === "no") {
                                    setDeploy('yes')
                                } else { setDeploy('no') }
                            }} className='btn black card-btn'>{deploy === "no" ? "Dévelloper" : "Réduire"}</button>
                            <a href="#" className='btn btn-primary card-btn'>Discuter</a>
                        </div>
                    </article>
                    <article className="services-expand__card">

                        <span className="services-expand__card-img tech">
                            <div className={deploy === "yes" ?
                                "services-expand__card-img-title hide" : "services-expand__card-img-title"}>
                                <h2>Technologie</h2>
                            </div>
                            <div className={deploy === "yes" ?
                                "services__block display" : "services__block"}>
                                <div className="services-expand__card-img__infos image-3d">
                                    <h4>Visite Virtuel</h4>
                                    <ul className='services-list'>
                                        <li>
                                            <h5>Visite virtuelle 360 (Photo & vidéo).</h5>
                                        </li>
                                        <li>
                                            <h5>Google Street View Trusted (Mise à jour des visites virtuelles des rues).</h5>
                                        </li>
                                        <li>
                                            <h5>Annimation d’objets en 360.</h5>
                                        </li>
                                    </ul>
                                </div>
                                <div className="services-expand__card-img__infos web">
                                    <h4>Web</h4>
                                    <ul className='services-list'>
                                        <li>
                                            <h5>Création de site web.</h5>
                                        </li>
                                        <li>
                                            <h5>Infographie et Webdesign.</h5>
                                        </li>
                                        <li>
                                            <h5>Maintenance et suivis de site web</h5>
                                        </li>
                                        <li>
                                            <h5>Gestion de campagnes de communicattion digitale.</h5>
                                        </li>
                                    </ul>
                                </div>
                                <div className="services-expand__card-img__infos media">
                                    <h4>Média</h4>
                                    <ul className='services-list'>
                                        <li>
                                            <h5>Photographie aérienne et sol.</h5>
                                        </li>
                                        <li>
                                            <h5>Clip vidéo, vidéo institutionnelle & Teaser</h5>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </span>
                        <div className="services-expand__card-deploy">
                            <button onClick={() => {
                                if (deploy === "no") {
                                    setDeploy('yes')
                                } else { setDeploy('no') }
                            }} className='btn black card-btn'>{deploy === "no" ? "Dévelloper" : "Réduire"}</button>
                            <a href="#" className='btn btn-primary card-btn'>Discuter</a>
                        </div>
                    </article>
                    <article className="services-expand__card">

                        <span className="services-expand__card-img imm">
                            <div className={deploy === "yes" ?
                                "services-expand__card-img-title hide" : "services-expand__card-img-title"}>
                                <h2>Immobilier</h2>
                            </div>
                            <div className={deploy === "yes" ?
                                "services__block display" : "services__block"}>
                                <div className="services-expand__card-img__infos digitalisation">
                                    <h4>Digitalisation</h4>
                                    <ul className='services-list'>
                                        <li>
                                            <h5>Elaboration d’une base de donnée foncière.</h5>
                                        </li>
                                        <li>
                                            <h5>Digitalisation du cadastre.</h5>
                                        </li>
                                        <li>
                                            <h5>Mise en place de systeme d’information géographique.</h5>
                                        </li>
                                    </ul>
                                </div>
                                <div className="services-expand__card-img__infos imm-gestion">
                                    <h4>Gestion</h4>
                                    <ul className='services-list'>
                                        <li>
                                            <h5>Gestion de patrimoines immobiliers.</h5>
                                        </li>
                                        <li>
                                            <h5>Financement de projets immobiliers.</h5>
                                        </li>
                                        <li>
                                            <h5>Aménagement urbain.</h5>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </span>
                        <div className="services-expand__card-deploy">
                            <button onClick={() => {
                                if (deploy === "no") {
                                    setDeploy('yes')
                                } else { setDeploy('no') }
                            }} className='btn black card-btn'>{deploy === "no" ? "Dévelloper" : "Réduire"}</button>
                            <a href="#" className='btn btn-primary card-btn'>Discuter</a>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default ServicesExpand;