import React from 'react';

const Pokecard = ({ id, name, type, base_experience }) => {
  const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <div className="Pokecard">
      <h1 className="Pokecard-title">{name}</h1>
      <img src={imgSrc} alt={name} />
      <div className="Pokecard-data">Type: {type}</div>
      <div className="Pokecard-data">EXP: {base_experience}</div>
    </div>
  );
};

export default Pokecard;
