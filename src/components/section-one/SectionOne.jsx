import React from 'react';
import CONSTRUCTION from "../../assets/icon-construction.png"
import IMMOBILIER from "../../assets/icon-imobilier.png"
import EVACUATION from "../../assets/icon-evacuation.png"
import TECH from "../../assets/icon-tech.png"
import IMAGETRI from "../../assets/image-a-360-.png"



import './sectionOne.css'

const SectionOne = () => {
    return (
        <section id="competences">
            <div className="container container__competences">
                <span><img src={CONSTRUCTION} alt="icon construction" /></span>
                <span><img src={TECH} alt="icon technologie" /></span>
                <span><img src={IMAGETRI} alt="icon imagerie 360" /></span>
                <span><img src={IMMOBILIER} alt="icon immobilier" /></span>
                <span><img src={EVACUATION} alt="icon evacuation" /></span>
            </div>
        </section>
    );
};

export default SectionOne;