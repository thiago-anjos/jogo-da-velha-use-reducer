import { GameContext } from 'contexts/GameContext';
import { ActionType } from 'contexts/reducer';
import { useContext } from 'react';
import { SquareFunctionProps } from 'types/types';

export default function Square({ value, index }: SquareFunctionProps) {
  const {
    state: { squares, isXNext, winner },
    dispatch,
  } = useContext(GameContext);

  function handleClick() {
    if (squares[index]) return;
    if (winner) return;
    const newSquares = [...squares];
    newSquares[index] = isXNext ? 'X' : 'O';

    dispatch({ type: ActionType.UPDATE_SQUARES, payload: newSquares });
  }

  return (
    <button type="button" onClick={handleClick}>
      {value}
    </button>
  );
}
