import { GameContext } from 'contexts/GameContext';
import { useContext } from 'react';

export default function Winner() {
  const {
    state: { winner },
  } = useContext(GameContext);
  if (!winner) return <></>;
  return <p>{winner} ganhou!</p>;
}
