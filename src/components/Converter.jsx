import React, { useContext } from 'react';
import { GAME_DND, GAME_WOW } from '../constants/config';
import { GameContext } from '../context/GameContext';
import ConversionRate from './ConversionRate';

const Converter = () => {
  const { game, setGame } = useContext(GameContext);

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
                  onChange={(e) => { setGame(e.target.value) }}
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
                  onChange={(e) => { setGame(e.target.value) }}
                />
                <label htmlFor={GAME_DND}>
                  Dungeons &amp; Dragons
                </label>
              </li>
            </ul>
          </form>
        </div>
      </div>

      <ConversionRate game={game} />


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
