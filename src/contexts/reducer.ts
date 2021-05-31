import { State } from 'types/types';

type Action = {
  type: string;
  payload: {};
};

export default function reducer(state: State, action: Action): State {
  console.log('action', action.payload);
  return state;
}
