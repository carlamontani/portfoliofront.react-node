import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Portfolio.css'

function Portfolio (){
    const [projects, setProjects] = useState({});
    useEffect(() =>{
        axios.get('https://portfolioback-react.herokuapp.com/portfolio')
        .then(
            res => setProjects(res.data)
        )}, [setProjects])
        
    return(
        <div className="Portfolio padding-bottom padding-title-portfolio">
            <div className= "column-title-ed">
                    <p className="main-title">Proyectos</p>
            </div>

            <div>
                {projects.length > 0 && projects.map((project, index) =>
                    <div className="individual-card padding-bottom-item">
                        <p>
                            <p className= "p bold">
                                <div className="slash"></div>
                                {project.name} - 
                                <span className= "p">
                                {project.client}
                                </span>
                            </p>

                            <ul className="ul-skills no-margin">
                                {project.skills.map((skill, index) =>
                                <p className="skill-p p">{skill}</p>
                                )}  
                            </ul> 

                            <a className="boton-visitar" href={project.link}  add target="_blank">
                                <button class="button">
                                    Visitar Web
                                    <i className="fas fa-external-link-alt link"></i>
                                </button>

                                <button class="button">
                                    Visitar Repo
                                    <i className="fas fa-external-link-alt link"></i>
                                </button>
                            </a>
                        </p>              
                    </div>
                )}
            </div>
        </div>
    )
}

export default Portfolio;