import { State, StringArray } from 'types/types';
import { INITIAL_STATES } from './GameContext';

import * as React from 'react';

export enum ActionType {
  UPDATE_SQUARES = 'UPDATE_SQUARES',
  UPDATE_WINNER = 'UPDATE_WINNER',
  RESET = 'RESET',
  UPDATE_HISTORY = 'UPDATE_HISTORY',
}

type Action =
  | {
      type: ActionType.UPDATE_SQUARES;
      payload: StringArray;
    }
  | {
      type: ActionType.UPDATE_WINNER;
      payload: string;
    }
  | {
      type: ActionType.UPDATE_HISTORY;
      payload: {
        history: {
          squares: StringArray;
          isXNext: boolean;
          winner: string;
        }[];
        index: number;
      };
    };

const reducer: React.Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case ActionType.UPDATE_SQUARES: {
      const { squares, history, isXNext, winner } = state;
      const newHistory = [...history, { squares, isXNext, winner }];
      const newState = { ...state };
      newState.squares = action.payload;
      newState.isXNext = !isXNext;
      newState.winner = winner;
      newState.history = newHistory;
      console.log(newState);
      return newState;
    }
    case ActionType.UPDATE_WINNER: {
      return { ...state, winner: action.payload };
    }
    case ActionType.UPDATE_HISTORY:
      const { history, index } = action.payload;
      const { squares, isXNext, winner } = history[index];
      const newHistory = [...history];
      newHistory.splice(index, history.length);

      const newState = {
        ...state,
        squares,
        winner,
        isXNext,
        history: newHistory,
      };

      return newState;
    default:
      return state;
  }
};

export default reducer;
