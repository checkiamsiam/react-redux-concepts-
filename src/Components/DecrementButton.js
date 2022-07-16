import React from 'react';
import { useDispatch } from 'react-redux';
import { decrementAction } from '../StateManagement/Actions/counterActions';

const DecrementButton = () => {
  const dispatch = useDispatch()
  return (
    <button onClick={()=> dispatch(decrementAction(1))}>Decrement</button>
  );
};

export default DecrementButton;