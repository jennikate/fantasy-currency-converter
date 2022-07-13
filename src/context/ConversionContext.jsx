import React, { createContext, useContext, useEffect, useState } from 'react';
import { CONVERSION_DND, CONVERSION_WOW, GAME_DND, GAME_WOW } from '../constants/config';
import { GameContext } from '../context/GameContext';

export const ConversionContext = createContext();

const ConversionProvider = ({ children }) => {
  const [conversionRate, setconversionRate] = useState();
  const { game } = useContext(GameContext);

  useEffect(() => {
    switch (game) {
      case GAME_WOW: {
        setconversionRate(CONVERSION_WOW);
      }
        break;
      case GAME_DND: {
        setconversionRate(CONVERSION_DND);
      }
        break;
      default: {
        setconversionRate();
      }
    }
  }, [game]);

  return (
    <ConversionContext.Provider value={{ conversionRate }}>
      {children}
    </ConversionContext.Provider>
  );
}

export { ConversionProvider };
