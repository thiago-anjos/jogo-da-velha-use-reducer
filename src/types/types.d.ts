import { Dispatch, SetStateAction } from 'react';

export type StringArray = Array<string>;

export interface ContextProps {
  squares: StringArray;
  setSquares: Function;
  isXNext: boolean;
  setIsXNext: Function;
  INIT_STATE_ISNEXT: boolean;
  INIT_STATE_SQUARES: null[];
  winner: string;
  setWinner: Dispatch<SetStateAction<string>>;
  history: {
    squares: StringArray;
    isXNext: boolean;
    winner: string;
  }[];
  setHistory: Function;
}

export interface SquareFunctionProps {
  value: string;
  index: number;
}
