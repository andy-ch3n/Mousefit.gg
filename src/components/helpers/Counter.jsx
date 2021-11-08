import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, getCount } from '../redux/state/counterSlice';

function Counter() {
  const count = useSelector(getCount);
  const dispatch = useDispatch();

  return (
    <>
      <button
        aria-label="Increment value"
        type="button"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        type="button"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </>
  );
}

export default Counter;
