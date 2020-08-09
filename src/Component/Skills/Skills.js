import React, {useState, useEffect} from 'react';

import axios from 'axios';

import './Skills.css'

const Skills = props => {
    const [information, setInformation] = useState({});
    useEffect(() =>{
        axios.get('https://portfolio-carla.herokuapp.com/about')
        .then(
            res => setInformation(res.data[0])
    )}, [setInformation])

    return(
        <div className="Skills padding-bottom">
            <h2 className="title rose">Skills</h2>
            
            <ul className="ul-skills no-margin">
                {information.skills && information.skills.map((skill, index) =>
                <p className="skill p">{skill}</p>
                )}
            </ul>
        </div>
    )
}

export default Skills;