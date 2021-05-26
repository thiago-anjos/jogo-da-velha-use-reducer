import { GameContext } from 'contexts/GameContext';
import { useContext } from 'react';

export default function Reset() {
  const { setSquares, setIsXNext, INIT_STATE_SQUARES, INIT_STATE_ISNEXT } =
    useContext(GameContext);

  function handleReset() {
    setSquares(INIT_STATE_SQUARES);
    setIsXNext(INIT_STATE_ISNEXT);
  }

  return (
    <div className="reset">
      <button type="button" onClick={handleReset}>
        Recomeçar o jogo
      </button>
    </div>
  );
}
