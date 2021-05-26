import React, { createContext, useState } from 'react';

const INIT_STATE_SQUARES = Array(9).fill(null);
const INIT_STATE_ISNEXT = true;

interface ContextProps {
  squares: Array<unknown>;
  setSquares: Function;
  isXNext: boolean;
  setIsXNext: Function;
  INIT_STATE_ISNEXT: boolean;
  INIT_STATE_SQUARES: null[];
}

export const GameContext = createContext<ContextProps>({
  squares: [],
  setSquares: () => {},
  isXNext: false,
  setIsXNext: () => {},
  INIT_STATE_ISNEXT: false,
  INIT_STATE_SQUARES: INIT_STATE_SQUARES,
});

type GameContextProps = {
  children: React.ReactNode;
};

export default function GameContextProvider({ children }: GameContextProps) {
  const [squares, setSquares] = useState(INIT_STATE_SQUARES);
  const [isXNext, setIsXNext] = useState(INIT_STATE_ISNEXT);

  const state: ContextProps = {
    squares,
    setSquares,
    isXNext,
    setIsXNext,
    INIT_STATE_SQUARES,
    INIT_STATE_ISNEXT,
  };

  return <GameContext.Provider value={state}>{children}</GameContext.Provider>;
}
