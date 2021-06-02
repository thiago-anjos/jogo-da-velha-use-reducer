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
import { ActionType } from 'contexts/reducer';

export default function Board() {
  const {
    state: { squares },
    dispatch,
  } = useContext(GameContext);

  useEffect(() => {
    if (!squares) return;
    const winner = calculateWinner(squares);
    if (winner) {
      dispatch({ type: ActionType.UPDATE_WINNER, payload: winner });
    }
  }, [dispatch, history, squares]);

  return (
    <div className="board-container">
      <Player />
      <Winner />
      <div className="board">
        {squares.map((item, index) => (
          <Square value={item as string} index={index} key={index} />
        ))}
      </div>
      <Reset />
      <History />
    </div>
  );
}
