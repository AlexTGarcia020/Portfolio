import React from "react";
import { Icon } from "@iconify/react";
import fondoImagen from "../../public/AG2.png"
import "../CSS/Tecnologias.css"

function Tecnologias () {
    return (
        <div className="container">
        <div className='row'>
          <div className='col'>
            <div className='fondo-imagen shadow d-flex justify-content-center' style={{ backgroundImage: `url(${fondoImagen})` }} ></div>
          </div>
        </div>
        <div className='row'>
          <div className='col text-center'>
            <div className='tecnologias-container'>
              <h1 className='text-main-tecnologias text-white fw-bold' style={{ fontFamily: "" }}>Habilidades<strong className="strong-class"> ( skills )</strong></h1>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col text-center'>
            <div className="icons-media">
              <Icon className="text-white icon-media" style={{ fontSize: "25px" }} icon="uiw:linkedin" />
              <Icon className="text-white icon-media me-2" style={{ fontSize: "33px" }} icon="mdi:github-box" />
              <div className="responsive-about">
                <p className="text-white fs-4">Descarga Mi </p>
                <form action="https://www.dropbox.com/scl/fi/6e6oc81oyqa8y770j6gkl/CV-AlexG-2024.pdf?rlkey=ouhnhdn26l8hvq1yux0dr77kd&dl=0" target="_blank">
                  <button className="btn-cv" type="submit">CV<Icon className="fs-4" icon="material-symbols:download" /></button>
                </form>
              </div>
            </div>
          </div>
        </div>
            <div className="text-white content-texts" style={{marginLeft:"42.6%"}}>
                <h2 className="fs-5 text-about">Desarrollador web apasionado por el fútbol y los videojuegos. <br/>Actualmente viviendo en Montevideo, Uruguay.</h2>
                <br />
                <h4 className="fs-4 text-hability fw-bold">Habilidades Principales:</h4>
                <br/>
                <div className="skills">
                    <div>HTML5</div>
                    <div>CSS</div>
                    <div>JavaScript</div>
                    <div>Bootstrap</div>
                    <div>Node.js</div>
                    <div>Express.js</div>
                    <div>Passport.js</div>
                    <div>React.js</div>
                    <div>Redux.js</div>
                    <div>Hooks</div>
                    <div>JWT</div>
                    <div>API Rest</div>
                    <div>MongoDB</div>
                    <div>MySQL</div>
                    <div>Tailwind.CSS</div>
                    <div>Git</div>
                </div>
                <br />
                <h4 className="fs-4 mt-2 text-hability fw-bold">Idiomas:</h4>
                <br/>
                <div className="idiomas">
                    <div>Español : Nativo</div>
                    <div>Ingles : Intermedio</div>
                </div>
           </div>
    </div>
    )
  }


export default Tecnologias