import React, { createContext, useContext, useEffect, useState } from 'react';
import { CONVERSION_DND, CONVERSION_WOW, GAME_DND, GAME_WOW } from '../constants/config';
import { GameContext } from '../context/GameContext';

export const ConversionContext = createContext();

const ConversionProvider = ({ children }) => {
  const [goldInSilver, setGoldInSilver] = useState();
  const [goldInCopper, setGoldInCopper] = useState();
  const { game } = useContext(GameContext);

  useEffect(() => {
    switch (game) {
      case GAME_WOW: {
        setGoldInSilver(CONVERSION_WOW);
        setGoldInCopper(CONVERSION_WOW * CONVERSION_WOW)
      }
        break;
      case GAME_DND: {
        setGoldInSilver(CONVERSION_DND);
        setGoldInCopper(CONVERSION_DND * CONVERSION_DND);
      }
        break;
      default: {
        setGoldInSilver();
        setGoldInCopper();
      }
    }
  }, [game]);

  return (
    <ConversionContext.Provider value={{ goldInSilver, goldInCopper }}>
      {children}
    </ConversionContext.Provider>
  );
}

export { ConversionProvider };
