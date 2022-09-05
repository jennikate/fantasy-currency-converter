import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext'; // import context from where it is created

const Header = () => {
  const { gameName } = useContext(GameContext); // set the var to use in our component (our context has setGame and game, we only need to consume game here)
 
  return (
    <header className="container">
      <div className="content">
        <h1>Fantasy Currency Converter</h1>
        <p>{`Conversion for ${gameName}`}</p>
      </div>
    </header>
  )
};

export default Header;

