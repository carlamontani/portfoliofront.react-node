import React from 'react';

import './Education.css'

const Education = props => {
    return(
        <div className="Education padding-bottom">
            <div className= "column-title-none">
                <p className="main-title"></p>
            </div>
            <div className="education-main">
                <div className="column-3">
                    <div className="slash"></div>
                    <p className="p">
                        <div className="p bold ">Diseño Gráfico </div>
                        <div className="p ">FADU·UBA</div>
                        <p className="p year"> 2013-2018</p>
                    </p>
                </div>

                <div className="column-3">
                    <div className="slash"></div>
                    <p className="p">
                        <p className="p bold">Desarrollo Front-End </p>
                        <p className="p"> Ada ITW</p>
                        <p className="p year"> 2019</p>
                        <p className="p icon-skill"> <i class="fab fa-git-alt pad-icon"></i>Git</p>
                        <p className="p icon-skill"> <i class="fab fa-html5 pad-icon"></i> HTML</p>
                        <p className="p icon-skill"> <i class="fab fa-css3 pad-icon"></i>CSS3</p>
                        <p className="p icon-skill"> <i class="fab fa-sass pad-icon"></i>Sass</p>
                        <p className="p icon-skill"> <i class="fab fa-js pad-icon"></i> Javascript</p>
                        <p className="p icon-skill"> <i class="fab fa-react pad-icon"></i>React</p>
                    </p>
                </div>

                <div className="column-3">
                    <div className="slash"></div>
                    <p className="p">
                        <p className="p bold">Diseño UX </p>
                        <p className="p bold">Javascript</p>
                        <p className="p bold">React</p>
                        <p className="p">CoderHouse</p>
                        <p className="p year"> 2019-2020</p>
                        <p className="p icon-skill"> <i class="fab fa-js pad-icon"></i> Javascript</p>
                        <p className="p icon-skill"> <i class="fab fa-js pad-icon"></i> JQuery</p>
                        <p className="p icon-skill"> <i class="fab fa-react pad-icon"></i>React</p>
                        <p className="p icon-skill"><i class="fas fa-code"></i>Firebase</p>
                    </p>
                </div>
            </div>
            <div className= "column-title-edleft">
                <p className="main-title">Educación</p>
            </div>
        </div>
    )
}

export default Education;