import { GameContext } from 'contexts/GameContext';
import { useContext } from 'react';

export default function Board() {
  const context = useContext(GameContext);

  return <h1>Board: {context}</h1>;
}
