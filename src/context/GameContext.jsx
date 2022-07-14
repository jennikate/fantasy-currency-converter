import React, { createContext, useEffect, useState } from 'react';
import { GAME_DND, GAME_WOW } from '../constants/config';

// we want to make this context available across the app
// so it can be used for obtaining classes, calculations, and content
export const GameContext = createContext(); // initialise the context

const GameProvider = ({ startingGame, children }) => {
  // you could extract this out to a hook (e.g useGame for state setting)
  // to follow pattern of separation of concern
  // but as it's only a single state item it seems overly complex to separate it out
  const [game, setGame] = useState(startingGame);
  const [gameName, setGameName] = useState();

  useEffect(() => {
    switch (game) {
      case GAME_DND: setGameName('Dungeons & Dragons')
        break;
      case GAME_WOW: setGameName('World of Warcraft')
        break;
      default: setGameName('');
    }
  }, [startingGame, game]);

  // Use the Context Provider to wrap the tree of components that need the state Context.
  return (
    <GameContext.Provider value={{ setGame, game, gameName }}>
      {children}
    </GameContext.Provider>
  );
}

export { GameProvider };

// We want to provide the app with a default (starting) gameContext
// And then we want to allow the entire app use of the GameContext
// We do this by creating Container.jsx
// within Container we will then define the structure of the app, including nav if needed
// and then in App.js we only need to call the Container component, everything else lives within

// We could rename Container to Main or Layout or whatever makes sense for the App



// Context provides a way to pass data through the component tree without having to pass props down manually at every level.
// This helps us to skip the mandatory hierarchy of passing props for each component in its component tree.

// Provider component receives the state as props, and post that, each child component has implicit access to the managed state.

// A good explanation/example: https://flexiple.com/react/provider-pattern-with-react-context-api/