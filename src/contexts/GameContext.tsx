import React, { createContext, useReducer } from 'react';
import { State } from 'types/types';
import reducer from './reducer';

const INIT_STATE_SQUARES = Array(9).fill(null);
const INIT_STATE_ISNEXT = true;

// reducer
const INITIAL_STATES = {
  squares: INIT_STATE_SQUARES,
  isXNext: INIT_STATE_ISNEXT,
  winner: '',
  history: [
    {
      squares: INIT_STATE_SQUARES,
      isXNext: INIT_STATE_ISNEXT,
      winner: '',
    },
  ],
};

export const GameContext = createContext<{
  state: State;
  dispatch: React.Dispatch<any>;
}>({
  state: INITIAL_STATES,
  dispatch: () => null,
});

type GameContextProps = {
  children: React.ReactNode;
};

export default function GameContextProvider({ children }: GameContextProps) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATES);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}
