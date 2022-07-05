import React, { useContext, useState } from 'react';
import { GAME_DND, GAME_WOW } from '../constants/config';
import { GameContext } from '../context/GameContext';

const CONVERSION_WOW = 100;
const CONVERSION_DND = 10;



const Converter = () => {
  const [goldInSilver, setGoldInSilver] = useState();
  const [goldInCopper, setGoldInCopper] = useState();
  const { game, setGame } = useContext(GameContext);

  function handleGameChange(e) {
    setGame(e.target.value); // this is where we're setting our GameContext

    switch (e.target.value) {
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
  };

  return (
    <>
      <div className="container body">
        <div className="game-selector">
          <h2>Select your game</h2>
          <form id="gameSelector">
            <ul className="radios">
              <li>
                <input
                  id={GAME_WOW}
                  name="selectGame"
                  type="radio"
                  value={GAME_WOW}
                  checked={game === GAME_WOW ? 'checked' : ''}
                  onChange={handleGameChange}
                />
                <label htmlFor={GAME_WOW}>
                  World of Warcraft
                </label>
              </li>
              <li>
                <input
                  id={GAME_DND}
                  name="selectGame"
                  type="radio"
                  value={GAME_DND}
                  checked={game === GAME_DND ? 'checked' : ''}
                  onChange={handleGameChange}
                />
                <label htmlFor={GAME_DND}>
                  Dungeons &amp; Dragons
                </label>
              </li>
            </ul>
          </form>
        </div>
      </div>

      <h3>Conversion Rate</h3>
      {goldInSilver && <p>{`1 gold is equal to ${goldInSilver} silver or ${goldInCopper} copper`}</p>}


      <ul>
        <li>form to enter gold silver copper amount</li>
        <li>button to convert</li>
        <li>function to calculate</li>
        <li>output in gold, silver, copper</li>
        <li>silver and copper</li>
        <li>just copper</li>
        <li>Theme switcher</li>
      </ul>
    </>
  )
};

export default Converter;
