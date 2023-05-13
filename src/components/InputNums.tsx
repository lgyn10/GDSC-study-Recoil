import React, {useState} from 'react';
import {useRecoilState} from 'recoil';
import {numAtom} from '../Atom/Atom';
import type * as atomTypes from '../Atom/Atom';

type Props = {
  onButtonClick: () => void;
};

const InputNums = ({onButtonClick}: Props) => {
  const [nums, setNums] = useRecoilState(numAtom);
  const [inputNums, setInputNums] = useState<atomTypes.nums>({num1: 0, num2: 0});
  const onClick = () => {
    setNums({...inputNums});
    setInputNums({num1: 0, num2: 0});
    onButtonClick();
  };
  return (
    <article>
      <h3>두 개의 숫자를 입력하세요.</h3>
      <label>
        <p>number 1</p>
        <input
          type='number'
          value={inputNums.num1}
          onChange={(e) => setInputNums({...inputNums, num1: parseInt(e.target.value)})}
        />
      </label>
      <label>
        <p>number 2</p>
        <input
          type='number'
          value={inputNums.num2}
          onChange={(e) => setInputNums({...inputNums, num2: parseInt(e.target.value)})}
        />
      </label>
      <button onClick={onClick}>전송</button>
    </article>
  );
};

export default InputNums;
