import React from 'react';
import { useDispatch } from 'react-redux'
import { incrementAction } from '../StateManagement/Actions/counterActions';

const IncrementButton = () => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(incrementAction(1))}>Increment</button>
  );
};

export default IncrementButton;