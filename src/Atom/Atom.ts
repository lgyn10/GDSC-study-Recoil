import {atom, selector} from 'recoil';

export type nums = {
  num1: number;
  num2: number;
};

export const numAtom = atom<nums>({
  key: 'numAtom',
  default: {num1: 0, num2: 0},
});
