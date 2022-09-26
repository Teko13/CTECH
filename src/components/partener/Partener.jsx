import React from 'react';
import './partener.css'
import EGO from "../../assets/ego.pdf"
const Partener = () => {
    return (
        <div id='partener'>
            <h4>Partenaires</h4>
            <ul className='partener__list'>
                <li><a href="https://togocom.tg/"><h5>TOGOCOM</h5></a></li>
                <li><a href="https://www.facebook.com/profile.php?id=100070835170322"><h5>TABIS</h5></a></li>
                <li><a href="https://www.sagemcom.com/fr"><h5>SAGEMCOM</h5></a></li>
                <li><a href={EGO} download><h5>EGO SERVICES</h5></a></li>
                <li><a href="#"><h5>WGA</h5></a></li>
            </ul>
        </div>
    );
};

export default Partener;