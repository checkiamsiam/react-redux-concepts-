import React from 'react';
import { useSelector } from 'react-redux'

const CounterDiv = () => {
  const state = useSelector((state) => state.counterReducer.counterNumber)
  return (
    <div>
      <h1>Counter : {state}</h1>
    </div>
  );
};

export default CounterDiv;