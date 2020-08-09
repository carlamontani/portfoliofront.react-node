import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Portfolio.css'

function Portfolio (){
    const [projects, setProjects] = useState({});
    useEffect(() =>{
        axios.get('https://portfolio-carla.herokuapp.com/portfolio')
        .then(
            res => setProjects(res.data)
        )}, [setProjects])
        
    return(
        <div className="Portfolio padding-bottom padding-title-portfolio">
            <h2 className="title rose">Proyectos</h2>
            {projects.length > 0 && projects.map((project, index) =>
                <div className="individual-card padding-bottom-item">
                    <p className="p">
                        <i className="fas fa-square-full bullet rose"></i>
                        <span className= "bold">{project.name} </span> -
                        {project.client}
                        <a className="boton-visitar" href={project.link}  add target="_blank">
                            <button class="button">
                                Visitar
                                <i className="fas fa-external-link-alt link rose"></i>
                            </button>
                        </a>
                    </p>
                    <ul className="ul-skills no-margin">
                        {project.skills.map((skill, index) =>
                        <p className="skill-p p">{skill}</p>
                        )}  
                    </ul>               
                </div>
            )}
        </div>
    )
}

export default Portfolio;