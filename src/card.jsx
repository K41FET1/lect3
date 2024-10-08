import React from 'react';

function Card({ name, desc, src, age, bg }) {
  return (
    <div className="card" style={{ backgroundColor: bg }}> 
      <img src={src} alt={name} />
      <h2>{name}</h2>
      <p>{desc}</p>
      <p>Age: {age}</p> 
    </div>
  );
}

export default Card;
