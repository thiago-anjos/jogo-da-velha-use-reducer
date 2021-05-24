import { createContext } from 'react';

export const GameContext = createContext('');

type GameContextProps = {
  children: React.ReactNode;
};

export default function GameContextProvider({ children }: GameContextProps) {
  return <GameContext.Provider value="teste">{children}</GameContext.Provider>;
}
