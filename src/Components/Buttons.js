import React from 'react';
import DecrementButton from './DecrementButton';
import IncrementButton from './IncrementButton';
import Reset from './Reset';
import './root.css'

const Buttons = () => {
  return (
    <div className='buttons'>
      <IncrementButton/>
      <DecrementButton/>
      <Reset/>
    </div>
  );
};

export default Buttons;