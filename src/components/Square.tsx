import { GameContext } from 'contexts/GameContext';
import { useContext } from 'react';

interface SquareProps {
  value: any;
  index: number;
}

export default function Square({ value, index }: SquareProps) {
  const { squares, setSquares, isXNext, setIsXNext } = useContext(GameContext);

  function handleClick() {
    if (squares[index]) return;
    const newSquares = [...squares];
    newSquares[index] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);
  }

  return (
    <button type="button" onClick={handleClick}>
      {value}
    </button>
  );
}
