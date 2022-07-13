import React, { useContext } from 'react';
import { GAME_WOW } from '../constants/config';
import { ConversionProvider } from '../context/ConversionContext';
import { GameProvider } from '../context/GameContext';
import Converter from './Converter';
import Header from './Header'

const Layout = () => {

  return (
    <GameProvider startingGame={GAME_WOW}>
      <Header />
      <ConversionProvider>
        <Converter />
      </ConversionProvider>
    </GameProvider>
  );
}

export default Layout;
