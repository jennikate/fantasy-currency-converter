import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext'; // import context from where it is created

const Header = () => {
  const { game } = useContext(GameContext); // set the var to use in our component (our context has setGame and game, we only need to consume game here)
 
  return (
    <div className="main">
      <div className="container header">
        header to just contain a nice name and banner
        {`the game chosen is ${game}`}
      </div>
    </div>
  )
};

export default Header;

