import React, { useContext } from 'react';
import { GAME_DND, GAME_WOW } from '../constants/config';
import { GameContext } from '../context/GameContext';
import ConversionRate from './ConversionRate';

const Converter = () => {
  const { game, setGame } = useContext(GameContext);

  // stop the number fields from changing number on scroll
  document.addEventListener("wheel", function (event) {
    if (document.activeElement.type === "number") {
      document.activeElement.blur();
    }
  });

  return (
    <>
      <div id="game-selector">
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

      <ConversionRate game={game} />

      <div id="amount-to-convert">
        <form>
          <ul>
            <li>
              <label htmlFor="inputGold">
                Gold
              </label>
              <input
                id="inputGold"
                name="inputGold"
                type="number"
              />
            </li>
            <li>
              <label htmlFor="inputSilver">
                Silver
              </label>
              <input
                id="inputSilver"
                name="inputSilver"
                type="number"
              />
            </li>

            <li>
              <label htmlFor="inputCopper">
                Copper
              </label>
              <input
                id="inputCopper"
                name="inputCopper"
                type="number"
              />
            </li>
          </ul>

        </form>
      </div>


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
