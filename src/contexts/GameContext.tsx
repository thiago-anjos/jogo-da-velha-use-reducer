import React, { createContext, useState } from 'react';

interface ContextProps {
  squares: Array<any>;
  setSquares: Function;
}

export const GameContext = createContext<ContextProps>({
  squares: [],
  setSquares: Function,
});

type GameContextProps = {
  children: React.ReactNode;
};

export default function GameContextProvider({ children }: GameContextProps) {
  const [squares, setSquares] = useState(Array().fill(null));

  const state: ContextProps = {
    squares,
    setSquares,
  };

  return <GameContext.Provider value={state}>{children}</GameContext.Provider>;
}
