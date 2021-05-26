import { GameContext } from 'contexts/GameContext';
import { useContext } from 'react';
import Square from './Square';
import Player from './Player';
import Reset from './Reset';

export default function Board() {
  const { squares } = useContext(GameContext);

  return (
    <div className="board-container">
      <Player />
      <div className="board">
        {squares.map((item, index) => (
          <Square value={item} index={index} />
        ))}
      </div>
      <Reset />
    </div>
  );
}
