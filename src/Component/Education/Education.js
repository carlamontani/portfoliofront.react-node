import React from 'react';

import './Education.css'

const Education = props => {
    return(
        <div className="Education padding-bottom">
            <h2 className="title rose">Estudios - Cursos</h2>

            <p className="p">
                <i className="fas fa-square-full bullet rose"></i>
                <span className="p bold">Diseño Gráfico </span>
                <span className="p"> - FADU·UBA</span>
            </p>

            <p className="p">
                <i className="fas fa-square-full bullet rose"></i>
                <span className="p bold">Desarrollo Front-End </span>
                <span className="p"> - Ada ITW</span>
            </p>

            <p className="p">
                <i className="fas fa-square-full bullet rose"></i>
                <span className="p bold">Diseño UX - Javascript - React </span>
                <span className="p"> - CoderHouse</span>
            </p>
        </div>
    )
}

export default Education;