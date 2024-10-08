import React from 'react';
import './App.css'; 
import Header from './Header';
import Footer from './Footer';
import CardList from './cardList';
import cardsData from './Data'; 

function App() {
  return (
    <div className="App">
      <Header /> 
      <CardList cards={cardsData} /> 
      <Footer /> 
    </div>
  );
}

export default App;
