import { GameContext } from 'contexts/GameContext';
import { useContext } from 'react';

export default function Player() {
  const { isXNext } = useContext(GameContext);

  return <h1>Player: {isXNext ? '1' : '2'}</h1>;
}
