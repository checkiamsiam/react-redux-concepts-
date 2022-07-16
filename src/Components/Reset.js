import React from 'react';
import {  useDispatch } from 'react-redux'
import { resetAction } from '../StateManagement/Actions/counterActions';

const Reset = () => {
  const dispatch = useDispatch()
  return (
    <button onClick={() => dispatch(resetAction())}>Reset</button>
  );
};

export default Reset ;