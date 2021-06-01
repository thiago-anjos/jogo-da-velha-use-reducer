import { Action, State, StringArray } from 'types/types';

export default function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'UPDATE_SQUARES': {
      const { squares, history, isXNext, winner } = state;
      const newHistory = [...history, { squares, isXNext, winner }];
      const newState = { ...state };
      newState.squares = action.payload as StringArray;
      newState.isXNext = !isXNext;
      newState.winner = winner;
      newState.history = newHistory;
      console.log(newState);
      return newState;
    }
    case 'UPDATE_WINNER': {
      return { ...state, winner: action.payload as string };
    }
    default:
      return state;
  }
}
