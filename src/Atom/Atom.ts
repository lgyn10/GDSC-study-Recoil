import {atom} from 'recoil';
import {recoilPersist} from 'recoil-persist';

export type nums = {
  num1: number;
  num2: number;
};

const {persistAtom} = recoilPersist({
  storage: sessionStorage,
});

export const numAtom = atom<nums>({
  key: 'numAtom',
  default: {num1: 0, num2: 0},
  effects_UNSTABLE: [persistAtom],
});
