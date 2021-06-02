import { GameContext } from 'contexts/GameContext';
import { ActionType } from 'contexts/reducer';
import { useContext } from 'react';

export default function History() {
  const {
    state: { history },
    dispatch,
  } = useContext(GameContext);

  const handleClick = (index: number) => {
    dispatch({ type: ActionType.UPDATE_HISTORY, payload: { history, index } });
  };

  return (
    <div>
      {history.map((item, index) => (
        <div key={index}>
          <button onClick={() => handleClick(index)}>
            Voltar para a jogada {index}
          </button>
        </div>
      ))}
    </div>
  );
}
