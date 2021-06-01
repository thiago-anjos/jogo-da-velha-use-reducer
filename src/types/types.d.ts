export type StringArray = Array<string | null>;

export interface State {
  squares: StringArray;
  isXNext: boolean;
  winner: string;
  history: {
    squares: StringArray;
    isXNext: boolean;
    winner: string;
  }[];
}

export interface SquareFunctionProps {
  value: string;
  index: number;
}

export interface Action {
  type: string;
  payload: {};
}
