import React from "react";
import "../CardCharacter.css";
function CardCharacter({
  nombre,
  status,
  especie,
  gender,
  origen,
  urlImage,
  creacion,
  localation
}) {
  const getDate =
    new Date(creacion).getDay() +
    "-" +
    new Date(creacion).getMonth() +
    "-" +
    new Date(creacion).getFullYear();
  return (
    
    <div className="card">
      <section className="character-img">
        <img src={`${urlImage}`} alt={`imagen de ${nombre}`} />
      </section>
      <section className="character-info">
        <h2 className="character-name">Name: {nombre}</h2>
        <span className="character-status">Status: {status}</span>
        <span className="character-especie">Species: {especie}</span>
        <span className="character-gender">Gender: {gender}</span>
        <span className="character-localation">Localation: {localation}</span>
        <span className="character-origen">Origin: {origen}</span>
        <span>Date created: {getDate}</span>
      </section>
    </div>
  );
}

export default CardCharacter;
