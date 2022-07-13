import React, { createContext, useContext, useEffect, useState } from 'react';
import { CONVERSION_DND, CONVERSION_WOW, GAME_DND, GAME_WOW } from '../constants/config';
import { GameContext } from '../context/GameContext';

export const ConversionContext = createContext();

const ConversionProvider = ({ children }) => {
  const [conversionGoldInSilver, setconversionGoldInSilver] = useState();
  const [conversionGoldInCopper, setconversionGoldInCopper] = useState();
  const { game } = useContext(GameContext);

  useEffect(() => {
    switch (game) {
      case GAME_WOW: {
        setconversionGoldInSilver(CONVERSION_WOW);
        setconversionGoldInCopper(CONVERSION_WOW * CONVERSION_WOW)
      }
        break;
      case GAME_DND: {
        setconversionGoldInSilver(CONVERSION_DND);
        setconversionGoldInCopper(CONVERSION_DND * CONVERSION_DND);
      }
        break;
      default: {
        setconversionGoldInSilver();
        setconversionGoldInCopper();
      }
    }
  }, [game]);

  return (
    <ConversionContext.Provider value={{ conversionGoldInSilver, conversionGoldInCopper }}>
      {children}
    </ConversionContext.Provider>
  );
}

export { ConversionProvider };
