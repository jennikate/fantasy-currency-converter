import React, { useContext, useEffect, useState } from 'react';
import { CONVERSION_DND, CONVERSION_WOW, GAME_DND, GAME_WOW } from '../constants/config';
import { GameContext } from '../context/GameContext';

const ConversionRate = () => {
  const [goldInSilver, setGoldInSilver] = useState();
  const [goldInCopper, setGoldInCopper] = useState();
  const { game } = useContext(GameContext);

  // having the switch in the useEffect ensures that
  // the initial load of the page has component state set based
  // on the GameContext
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
    <>
      <h3>Conversion Rate</h3>
      {goldInSilver && <p>{`1 gold is equal to ${goldInSilver} silver or ${goldInCopper} copper`}</p>}
    </>
  );
}

export default ConversionRate;