import { GameContext } from 'contexts/GameContext';
import { useContext } from 'react';

export default function History() {
  const { history, setHistory, setSquares, setIsXNext, setWinner } =
    useContext(GameContext);

  const handleClick = (index: number) => {
    const newHistory = [...history];

    // para eliminar todos os historicos do index pra frente
    newHistory.splice(index, Number.MAX_SAFE_INTEGER);

    setHistory(newHistory);

    setSquares(history[index].squares);
    setIsXNext(history[index].isXNext);
    setWinner(history[index].winner);
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
