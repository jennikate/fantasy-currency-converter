import React, { useContext, useState } from 'react';
import { GAME_DND, GAME_WOW } from '../constants/config';
import { ConversionContext } from '../context/ConversionContext';
import { GameContext } from '../context/GameContext';
import ConversionRate from './ConversionRate';

const Converter = () => {
  const { game, setGame } = useContext(GameContext);
  const { conversionGoldInSilver, conversionGoldInCopper } = useContext(ConversionContext);
  const [formData, setFormData] = useState({});

  // stop the number fields from changing number on scroll
  document.addEventListener("wheel", function (e) {
    if (document.activeElement.type === "number") {
      document.activeElement.blur();
    }
  });

  function convertValues(value) {
    // total value in silver
    const convertedGold = value.gold ? parseInt(value.gold * conversionGoldInSilver) : 0;
    const convertedSilver = value.silver ? parseInt(value.silver) : 0;
    const convertedCopper = value.copper ? parseInt(value.copper / 100) : 0;

    const convertedToSilver = convertedGold + convertedSilver + convertedCopper;
    // get the remaining copper (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON)
    const convertedToSilverRemainingCopper = value.copper ? Math.round((((value.copper / 100) - Math.floor(value.copper / 100)) + Number.EPSILON) * 100) : 0;

    console.log(`SILVER: ${convertedToSilver}, with ${convertedToSilverRemainingCopper} copper remaining`);

  }

  function handleChange(e) {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    convertValues(formData);
  }

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
                name="gold"
                type="number"
                onChange={handleChange}
              />
            </li>
            <li>
              <label htmlFor="inputSilver">
                Silver
              </label>
              <input
                id="inputSilver"
                name="silver"
                type="number"
                onChange={handleChange}
              />
            </li>

            <li>
              <label htmlFor="inputCopper">
                Copper
              </label>
              <input
                id="inputCopper"
                name="copper"
                type="number"
                onChange={handleChange}
              />
            </li>
          </ul>
          <button
            type="submit"
            id="convertValues"
            onClick={handleSubmit}
          >
            Convert
          </button>
        </form>
      </div>


      <ul>
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
