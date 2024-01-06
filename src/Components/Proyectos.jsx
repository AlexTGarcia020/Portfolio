import React from "react";
import "../CSS/Proyectos.css";

function Proyectos() {
  return (
    <div className="row mt-5 g-0">
     <div className="col-md-4">
        <figure className="d-flex flex-column p-2 justify-content-center">
            <img src="/Color.png" className="w-50 rounded shadow" alt="Descripción de la imagen" />
            <figcaption>
            Descripción o título de la imagen o figura.
            </figcaption>
        </figure>
      </div>
      <div className="col-md-4">
        <figure className="d-flex flex-column p-2 justify-content-center">
            <img src="/Martini.png" className="w-50 rounded shadow" alt="Descripción de la imagen" />
            <figcaption>
            Descripción o título de la imagen o figura.
            </figcaption>
        </figure>
      </div>
      <div className="col-md-4">
        <figure className="d-inline flex-column p-2 justify-content-center">
            <img src="/Martei.png" className="w-50 rounded shadow" alt="Descripción de la imagen" />
            <figcaption>
            Descripción o título de la imagen o figura.
            </figcaption>
        </figure>
      </div>
      <div className="col-md-4">
        <figure className="d-flex flex-column  p-2 justify-content-center">
            <img src="/Jardim.png" className="w-50 rounded shadow" alt="Descripción de la imagen" />
            <figcaption>
            Descripción o título de la imagen o figura.
            </figcaption>
        </figure>
     </div>
     <div className="col-md-4">
      <figure className="d-flex flex-column p-2  justify-content-center">
        <img src="/Twitter.png" className="w-50 rounded shadow" alt="Descripción de la imagen" />
        <figcaption>
          Descripción o título de la imagen o figura.
        </figcaption>
      </figure>
      </div>
    <div className="col-md-4">
      <figure className="d-flex flex-column p-2 justify-content-center">
        <img src="/Hackflix.png" className="w-50 rounded shadow" alt="Descripción de la imagen" />
        <figcaption>
          Descripción o título de la imagen o figura.
        </figcaption>
      </figure>
      </div>
    </div>
  );
}

export default Proyectos;