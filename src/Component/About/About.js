import React, {useState, useEffect} from 'react';

import axios from 'axios';

import './About.css'

function About (){
    const [information, setInformation] = useState({});
    useEffect(() =>{
        axios.get('https://portfolio-carla.herokuapp.com/about')
        .then(
            res => setInformation(res.data[0])
        )}, [setInformation])
    return(
        <div className="About">
            <div className="div-img">
                <div className="profile-img">
                    <img className="profile-photo" alt="foto perfil" src={information.photo}></img>
                </div>
            </div>
            <div className="Descripcion padding-bottom padding-title">
                <h1 className= "h1 rose">{information.name}</h1>
                <h2 className= "h1 light padding-bottom">{information.profession}</h2>
                <h2 className="title rose">Hola!</h2>
                <p className = "p small">{information.about_me}</p>
            </div>
        </div>
    )
}

export default About;

//<div className="div-photo">
  //              <img className="profile-photo" alt="foto perfil" src={information.photo}></img>
     //       </div>