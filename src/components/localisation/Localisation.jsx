import React from 'react';
import "./localisation.css";

const Localisation = () => {
    return (
        <section>
            <div className="container local">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.966398671188!2d1.164109!3d6.268149600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102157709aa828a7%3A0xe9421be160555069!2sCREDO%20TECHNOLOGIES!5e0!3m2!1sfr!2sfr!4v1660832106020!5m2!1sfr!2sfr" width="600"
                    height="450" allowFullScreen="" loading="lazy"></iframe>
            </div>
        </section>
    );
};

export default Localisation;