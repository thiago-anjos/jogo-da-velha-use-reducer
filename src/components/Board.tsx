import { GameContext } from 'contexts/GameContext';
import { useContext } from 'react';
import Square from './Square';
import Player from './Player';
import Winner from './Winner';
import History from './History';
import Reset from './Reset';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import calculateWinner from 'utils/calculateWinners';

export default function Board() {
  const { squares, setWinner, history } = useContext(GameContext);
  useEffect(() => {
    const winner = calculateWinner(squares);
    winner ? setWinner(winner) : setWinner('');
  }, [squares]);

  return (
    <div className="board-container">
      <Player />
      <Winner />
      <div className="board">
        {squares.map((item, index) => (
          <Square value={item} index={index} key={index} />
        ))}
      </div>
      <Reset />
      <History />
    </div>
  );
}
