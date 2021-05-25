import { GameContext } from 'contexts/GameContext';
import { useContext } from 'react';

export default function Player() {
  const context = useContext(GameContext);

  return <h1>Board: {context.squares}</h1>;
}
