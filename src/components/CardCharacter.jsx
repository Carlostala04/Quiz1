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
  localation,
}) {
  //se crea el map con la clave (nombres de personajes) y su valor (color distintivo)
  const colorMap = {
    rick: "#3B82F6",
    morty: "#EAB308",
    summer: "#EC4899",
    jerry: "#024105",
    beth: "rgba(255, 102, 102, 0.87)",
  };
  //creamos una funcion que recibe como parametro el nombre del personaje
  //creamos una constante que almacena el nombre en minuscula
  //creamos otra constante que contenga el la coincidencia entre la llave y el nombre
  //retornamos el color que coincida con el personaje, por defecto el color que tomara si el personaje no existe es verde
  const getBorderColor = (name) => {
    const lowerName = name.toLowerCase();
    const match = Object.keys(colorMap).find((key) => lowerName.includes(key));
    return match ? colorMap[match] : "#adff57";
  };
  const getDate =
    new Date(creacion).getDay() +
    "-" +
    new Date(creacion).getMonth() +
    "-" +
    new Date(creacion).getFullYear();
  return (
    <div
      style={{ border: `3px solid ${getBorderColor(nombre)}` }}
      className="card"
    >
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
