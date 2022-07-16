import React from 'react';
import { useSelector } from 'react-redux'

const CounterDiv = () => {
  const CounterNumber = useSelector((state) => state.counterReducer.counterNumber)
  return (
    <div>
      <h1>Counter : {CounterNumber}</h1>
    </div>
  );
};

export default CounterDiv;