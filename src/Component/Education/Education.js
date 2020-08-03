import React from 'react';

import './Education.css'

const Education = props => {
    return(
        <div className="Education">
            <h2 className="title rose">Estudios - Cursos</h2>

            <p className="p">
                <i className="fas fa-square-full bullet rose"></i>
                Diseño Gráfico
            </p>
            <p className="p">FADU - UBA</p>

            <p className="p">
                <i className="fas fa-square-full bullet rose"></i>
                Desarrollo Front-End
            </p>
            <p className="p">Ada ITW</p>

            <p className="p">
                <i className="fas fa-square-full bullet rose"></i>
                Diseño UX - Javascript - React
            </p>
            <p className="p">CoderHouse</p>
        </div>
    )
}

export default Education;