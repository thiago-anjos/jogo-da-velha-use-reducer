import { GameContext } from 'contexts/GameContext';
import { ActionType } from 'contexts/reducer';
import { useContext } from 'react';

export default function Reset() {
  const { dispatch } = useContext(GameContext);

  function handleReset() {
    dispatch({ type: ActionType.RESET });
  }

  return (
    <div className="reset">
      <button type="button" onClick={handleReset}>
        Recomeçar o jogo
      </button>
    </div>
  );
}
