import React, {useState, useEffect} from 'react';

import axios from 'axios';

import './Skills.css'

const Skills = props => {
    const [information, setInformation] = useState({});
    useEffect(() =>{
        axios.get('https://portfolioback-react.herokuapp.com/about')
        .then(
            res => setInformation(res.data[0])
    )}, [setInformation])

    return(
        <div className="Skills padding-bottom">
            <div className= "column-title-ed">
                    <p className="main-title">Skills</p>
            </div>

            <div>
                <div className="column-2">
                        <div className="slash"></div>
                        <p className="p">
                            <div className="p bold ">Front-End</div>
                            <ul className="ul-skills no-margin">
                                {information.skillsfront && information.skillsfront.map((skill, index) =>
                                <p className="skill p">{skill}</p>
                                )}
                            </ul>
                        </p>
                </div>

                <div className="column-2">
                        <div className="slash"></div>
                        <p className="p">
                            <div className="p bold ">Front-End</div>
                            <ul className="ul-skills no-margin">
                                {information.skillsback && information.skillsback.map((skill, index) =>
                                <p className="skill p">{skill}</p>
                                )}
                            </ul>
                        </p>
                </div>
            </div>
        </div>
    )
}

export default Skills;