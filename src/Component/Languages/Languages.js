import React from 'react';

import './Languages.css'

const Languages = props => {
    return(
        <div className="Languages">
            <h2 className="title rose">Idiomas </h2>
            <p className="p">
                <i className="fas fa-square-full bullet rose"></i>
                <span className="p bold">Inglés</span>
                <span className="p"> - Nivel Intermedio</span>
            </p>
        </div>
    )
}

export default Languages;