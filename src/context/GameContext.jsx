import React, { createContext, useState } from 'react';
// import useGame from '../hooks/useGame';

// we want to make this context available across the app
// so it can be used for obtaining classes, calculations, and content
export const GameContext = createContext();

const GameProvider = ({ startingGame, children }) => {
  // you could extract this out to a hook (e.g useGame for state setting)
  // to follow pattern of separation of concern
  // but as it's only a single state item it seems overly complex to separate it out
  const [game, setGame] = useState(startingGame); 

  return (
    <GameContext.Provider value={{ setGame, game }}>
      {children}
    </GameContext.Provider>
  );
}

export { GameProvider };



// Context provides a way to pass data through the component tree without having to pass props down manually at every level.
// This helps us to skip the mandatory hierarchy of passing props for each component in its component tree.

// Provider component receives the state as props, and post that, each child component has implicit access to the managed state.

// A good explanation/example: https://flexiple.com/react/provider-pattern-with-react-context-api/