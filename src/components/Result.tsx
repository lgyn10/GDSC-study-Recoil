import React from 'react';
import {useRecoilValue} from 'recoil';
import {numAtom} from '../Atom/Atom';

const Result = () => {
  const nums = useRecoilValue(numAtom);
  return (
    <article>
      <h3>Result</h3>
      <article>
        <h6>sum</h6>
        <p>{nums.num1 + nums.num2}</p>
      </article>
      <article>
        <h6>mul</h6>
        <p>{nums.num1 * nums.num2}</p>
      </article>
    </article>
  );
};

export default Result;
