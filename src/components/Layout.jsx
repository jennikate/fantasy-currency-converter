import React, { useContext } from 'react';
import { GAME_WOW } from '../constants/config';
import { GameContext, GameProvider } from '../context/GameContext';


const Layout = ({ children }) => {
  // const { game } = useContext(GameContext);

  return (
    <GameProvider startingGame={GAME_WOW}>
      {children}
    </GameProvider>
  );
}

export default Layout;
