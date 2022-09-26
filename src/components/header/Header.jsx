import React, { useState } from 'react';
import LOGOCTECH from '../../assets/ctech-logo-couleur.png';
import "./header.css";
import { AiOutlineDownload } from 'react-icons/ai'
import { BsMenuButtonWide } from "react-icons/bs"
import CARTEVISITE from '../../assets/card-visite-ctech.pdf';
import { AiOutlineClose } from 'react-icons/ai'
import CTECHLOGOCLR from "../../assets/ctech-logo-couleur.png"
import CTECHWHITE from "../../assets/logo-ctech-blanc-avec-text.png"

const Header = () => {
    const [deployNav, setDeployNav] = useState('no-deploy');
    const [isScroll, setIsScroll] = useState(window.scrollY);
    const [viewPort, setW] = useState(window.innerWidth);
    window.addEventListener('scroll', () => {
        setIsScroll(window.scrollY)
    })

    return (
        <nav className={isScroll > 164 ? "darken" : ""}>
            <div className="container nav__container">
                <a href="#" className="nav__logo">
                    <img src={isScroll > 164 || viewPort < 1024 ? CTECHWHITE : CTECHLOGOCLR} alt="logo de ctech" />
                </a>
                <ul className={deployNav === "deployed" ? "nav__menu display" : "nav__menu"}>
                    <li><a href="#" onClick={() => {
                        if (deployNav === "deployed") {
                            setDeployNav("no-deploy")
                        }
                    }}>HOME</a></li>
                    <li><a href="#services" onClick={() => {
                        if (deployNav === "deployed") {
                            setDeployNav("no-deploy")
                        }
                    }}>A PROPOS</a></li>
                    <li><a href="#services-expand" onClick={() => {
                        if (deployNav === "deployed") {
                            setDeployNav("no-deploy")
                        }
                    }}>SERVICES</a></li>
                    <li><a href="#contact" onClick={() => {
                        if (deployNav === "deployed") {
                            setDeployNav("no-deploy")
                        }
                    }}>CONTACT</a></li>
                    <li>
                        <a href={CARTEVISITE} download className="btn btn-primary" onClick={() => {
                            if (deployNav === "deployed") {
                                setDeployNav("no-deploy")
                            }
                        }}><AiOutlineDownload /> CARTE DE VISITE</a>
                    </li>
                </ul>
                <button id="open-menu-btn" className={deployNav === "deployed" ? "hidden" : ""} onClick={() => {
                    setDeployNav('deployed')
                }}><BsMenuButtonWide /></button>
                <button id="close-menu-btn" className={deployNav === "deployed" ? "display" : ""} onClick={() => {
                    setDeployNav('no-deployed')
                }}><AiOutlineClose /></button>
            </div>
        </nav >
    );
};

export default Header;