import React from 'react';

import './Languages.css'

const Languages = props => {
    return(
        <div className="Languages">
            <h2 className="title rose">Idiomas </h2>
            <p className="p">
                <i className="fas fa-square-full bullet rose"></i>
                Inglés
            </p>
            <p className="p">Nivel Intermedio</p>
        </div>
    )
}

export default Languages;