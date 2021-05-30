import { GameContext } from 'contexts/GameContext';
import { useContext } from 'react';
import { SquareFunctionProps } from 'types/types';

export default function Square({ value, index }: SquareFunctionProps) {
  const {
    squares,
    setSquares,
    isXNext,
    setIsXNext,
    winner,
    setHistory,
    history,
  } = useContext(GameContext);

  function handleClick() {
    if (squares[index]) return;
    if (winner) return;
    const newSquares = [...squares];
    newSquares[index] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);

    setHistory([...history, { squares: squares, isXNext: !isXNext }]);
  }

  return (
    <button type="button" onClick={handleClick}>
      {value}
    </button>
  );
}
