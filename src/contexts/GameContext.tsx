import React, { createContext, useState } from 'react';
import { ContextProps } from 'types/types';

const INIT_STATE_SQUARES = Array(9).fill(null);
const INIT_STATE_ISNEXT = true;

export const GameContext = createContext<ContextProps>({
  squares: [''],
  setSquares: () => {},
  isXNext: false,
  setIsXNext: () => {},
  INIT_STATE_ISNEXT: false,
  INIT_STATE_SQUARES: INIT_STATE_SQUARES,
  winner: '',
  setWinner: () => {},
  history: [
    {
      squares: INIT_STATE_SQUARES,
      isXNext: false,
      winner: '',
    },
  ],
  setHistory: () => {},
});

type GameContextProps = {
  children: React.ReactNode;
};

export default function GameContextProvider({ children }: GameContextProps) {
  const [squares, setSquares] = useState(INIT_STATE_SQUARES);
  const [isXNext, setIsXNext] = useState(INIT_STATE_ISNEXT);
  const [history, setHistory] = useState([
    { squares: INIT_STATE_SQUARES, isXNext: false, winner: '' },
  ]);
  const [winner, setWinner] = useState('');

  const state: ContextProps = {
    squares,
    setSquares,
    isXNext,
    setIsXNext,
    INIT_STATE_SQUARES,
    INIT_STATE_ISNEXT,
    winner,
    setWinner,
    history,
    setHistory,
  };

  return <GameContext.Provider value={state}>{children}</GameContext.Provider>;
}
