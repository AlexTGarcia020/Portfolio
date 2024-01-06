import React from "react";
import "../CSS/Proyectos.css";
import { Link } from "react-router-dom";

function Proyectos() {
  return (
    <div className="row p-5" style={{marginTop:"250px"}}>
    <h1 className="text-center text-white fw-bold mt-5 text-proyect mb-5" style={{marginLeft:"-78px"}}>Proyectos</h1>
    <div className="col-md-4 container-proyects p-0">
      <figure className="d-flex flex-column cards-proyects">
        <img src="/Color.png" className="img-proyects w-100 shadow" alt="Descripción de la imagen" />
        <div className="overlay">
        <figcaption>
          Color Picker con Extrator De Color y gradientes!
        </figcaption>
        <a style={{textDecoration:"none"}} href="https://color-picker-by-alexx.vercel.app/" target="_blank" rel="noopener noreferrer">
        <button className="btn-cv-1" type="button">Link</button>
        </a>
        </div>
      </figure>
      </div>
    <div className="col-md-4 container-proyects p-0">
      <figure className="d-flex flex-column cards-proyects">
        <img src="/Martini.png" className="img-proyects w-100 shadow" alt="Descripción de la imagen" />
        <div className="overlay">
        <figcaption>
          Inmobiliaria Acosta y De Martini - Casas y Alquileres
        </figcaption>
          <a style={{textDecoration:"none"}} href="https://inmobiliaria-acostaydemartini.vercel.app/" target="_blank" rel="noopener noreferrer">
            <button className="btn-cv-2" type="button">Link</button>
          </a>
        </div>
      </figure>
    </div>
    <div className="col-md-4 container-proyects p-0">
      <figure className="d-flex flex-column cards-proyects">
        <img src="/Martei.png" className="img-proyects w-100 shadow" alt="Descripción de la imagen" />
        <div className="overlay">
        <figcaption>
          Martei - E-commerce - Tienda Online
        </figcaption>
        <a style={{textDecoration:"none"}} href="https://martei-deco.vercel.app/" target="_blank" rel="noopener noreferrer">
        <button className="btn-cv-3" type="button">Link</button>
        </a>
        </div>
      </figure>
    </div>

    <div className="col-md-4 container-proyects p-0">
      <figure className="d-flex flex-column cards-proyects">
        <img src="/Jardim.png" className="img-proyects w-100 shadow" alt="Descripción de la imagen" />
        <div className="overlay">
          <figcaption>
            Jardim - Empresa Funebre
          </figcaption>
          <a style={{textDecoration:"none"}} href="https://www.empresajardim.com/" target="_blank" rel="noopener noreferrer">
            <button className="btn-cv-4" type="button">Link</button>
          </a>
        </div>
      </figure>
    </div>
    <div className="col-md-4 container-proyects p-0">
      <figure className="d-flex flex-column cards-proyects">
        <img src="/Twitter.png" className="img-proyects w-100 shadow" alt="Descripción de la imagen" />
        <div className="overlay">
          <figcaption>
            Clon De Twitter No Deployeado 
            *Imagenes y Explicacion*
          </figcaption>
          <a style={{textDecoration:"none"}} target="_blank" href="https://www.dropbox.com/scl/fo/fdct7xmvah9r8aoa1cmuq/h?rlkey=bnnwhaijxryfnhodax36fs6qh&dl=0">
            <button className="btn-cv-5" type="button">Link</button>
          </a>
        </div>
      </figure>
    </div>
    <div className="col-md-4 container-proyects p-0">
      <figure className="d-flex flex-column cards-proyects">
        <img src="/Hackflix.png" className="img-proyects w-100 shadow" alt="Descripción de la imagen" />
        <div className="overlay">
          <figcaption>
            Pagina De Peliculas - TheMovieDataBase
          </figcaption>
          <a style={{textDecoration:"none"}} href="https://hack-flix-final-v1.vercel.app/" target="_blank" rel="noopener noreferrer">
            <button className="btn-cv-6" type="button">Link</button>
          </a>
        </div> 
      </figure>
    </div>
  </div>
);
}

export default Proyectos;