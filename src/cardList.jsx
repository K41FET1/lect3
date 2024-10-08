import React from 'react';
import Card from './card'; 

function CardList({ cards }) {
  return (
    <div className="cards-container">
      {cards.map(card => (
        <Card 
          key={card.id} 
          name={card.name} 
          desc={card.desc} 
          src={card.src} 
          age={card.age} 
          bg={card.bg} 
        />
      ))}
    </div>
  );
}

export default CardList;
