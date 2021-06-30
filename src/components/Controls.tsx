import React from 'react';
import './Controls.css'

type ControlsProps = {
  setUserInput: Function,
  handleUserInput: Function
};


function Controls({ setUserInput, handleUserInput }: ControlsProps) {
  return (
    <div>
      <input 
        type="text" 
        aria-label="user-search-input"
        onChange={ (e) => setUserInput(e.target.value) }
        onKeyUp={(e) => handleUserInput(e.key)}
      />
    </div>
  );
}

export default Controls;
