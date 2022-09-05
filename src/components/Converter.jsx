import React, { useContext, useState } from 'react';
import { GAME_DND, GAME_WOW } from '../constants/config';
import { ConversionContext } from '../context/ConversionContext';
import { GameContext } from '../context/GameContext';
import ConversionRate from './ConversionRate';

const Converter = () => {
  const { game, setGame } = useContext(GameContext);
  const { conversionRate } = useContext(ConversionContext);
  const [convertedValues, setConvertedValues] = useState({});
  const [formData, setFormData] = useState({});

  // stop the number fields from changing number on scroll
  document.addEventListener("wheel", function (e) {
    if (document.activeElement.type === "number") {
      document.activeElement.blur();
    }
  });

  function convertValues(value) {
    // get original values
    const gold = parseInt(value.gold) || 0;
    const silver = parseInt(value.silver) || 0;
    const copper = parseInt(value.copper) || 0;

    // convert to copper
    const goldInCopper = (gold * conversionRate) * conversionRate;
    const silverInCopper = silver * conversionRate;
    const amountInCopper = goldInCopper + silverInCopper + copper;

    // convert to silver
    const goldInSilver = gold * conversionRate;
    const copperInSilver = copper / conversionRate; // raw conversion
    const copperRemaining = Math.round((copperInSilver - Math.floor(copperInSilver)) * conversionRate); // (numWithDecimal - wholePartOfNum), * 100 to make full number, parse to convert into whole number
    const amountInSilver = goldInSilver + silver + parseInt(copperInSilver);

    // conver to gold
    const totalSilver = silver + Math.floor(copperInSilver);
    const silverInGold = totalSilver / conversionRate; // raw conversion
    const silverRemaining = Math.round((silverInGold - Math.floor(silverInGold)) * conversionRate);
    const amountInGold = gold + parseInt(silverInGold);

    const result = {
      entered: {
        gold: gold,
        silver: silver,
        copper: copper,
      },
      inGold: {
        gold: amountInGold,
        silver: silverRemaining,
        copper: copperRemaining,
      },
      inSilver: {
        silver: amountInSilver,
        copper: copperRemaining,
      },
      inCopper: {
        copper: amountInCopper,
      }
    }

    setConvertedValues(result);
  };

  function handleChange(e) {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    convertValues(formData);
  };

  return (
    <div className="container">
      <div className="content">

        <ConversionRate game={game} />

        <div id="amount-to-convert" className="full">
          <form>
            <ul className="inputAmounts">
              <li>
                <input
                  id="inputGold"
                  name="gold"
                  type="number"
                  onChange={handleChange}
                />
                <label htmlFor="inputGold">
                  Gold
                </label>
              </li>
              <li>
                <input
                  id="inputSilver"
                  name="silver"
                  type="number"
                  onChange={handleChange}
                />
                <label htmlFor="inputSilver">
                  Silver
                </label>
              </li>

              <li>
                <input
                  id="inputCopper"
                  name="copper"
                  type="number"
                  onChange={handleChange}
                />
                <label htmlFor="inputCopper">
                  Copper
                </label>
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

        {Object.entries(convertedValues).length > 0 && (
          <div id="result" className="full">
            <h3>Conversion Results</h3>
            <h4>Gold based</h4>
            <ul className="results in-gold">
              <li>
                <span className="label">Gold</span>
                <span className="amount">{convertedValues.inGold?.gold}</span>
              </li>
              <li>
                <span className="label">Silver</span>
                <span className="amount">{convertedValues.inGold.silver}</span>
              </li>
              <li>
                <span className="label">Copper</span>
                <span className="amount">{convertedValues.inGold.copper}</span>
              </li>
            </ul>

            <h4>Silver based</h4>
            <ul className="results in-silver">
              <li>
                <span className="label">Silver</span>
                <span className="amount">{convertedValues.inSilver.silver}</span>
              </li>
              <li>
                <span className="label">Copper</span>
                <span className="amount">{convertedValues.inSilver.copper}</span>
              </li>
            </ul>

            <h4>Copper based</h4>
            <ul className="results in-copper">
              <li>
                <span className="label">Copper</span>
                <span className="amount">{convertedValues.inCopper.copper}</span>
              </li>
            </ul>
          </div>
        )}


        <div id="game-selector" className="full">
          <h3>Change game</h3>
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
    </div>
  )
};

export default Converter;
