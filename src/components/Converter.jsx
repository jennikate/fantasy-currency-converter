import React, { useState } from 'react';

const GAME_WOW = 'WoW';
const GAME_DND = 'DnD';

const CONVERSION_WOW = 100;
const CONVERSION_DND = 10;



const Converter = () => {
  const [conversion, setConversion] = useState();
  const [goldInSilver, setGoldInSilver] = useState();
  const [goldInCopper, setGoldInCopper] = useState();

  function handleGameChange(e, game) {
    setConversion(e.target.value);
    
    switch(e.target.value) {
      case GAME_WOW: {
        setGoldInSilver(CONVERSION_WOW);
        setGoldInCopper(CONVERSION_WOW*CONVERSION_WOW)
      }
      break;
      case GAME_DND: {
        setGoldInSilver(CONVERSION_DND);
        setGoldInCopper(CONVERSION_DND*CONVERSION_DND);
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
                checked={conversion === GAME_WOW ? 'checked' : ''}
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
                checked={conversion === GAME_DND ? 'checked' : ''}
                onChange={(e) => handleGameChange(e, {game: GAME_DND})}
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
