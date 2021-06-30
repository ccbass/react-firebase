import React from 'react';
import './Controls.css'

type ControlsProps = {
  setUserInput: Function,
  handleUserInput: Function,
  userInput: string
};


function Controls({ setUserInput, handleUserInput, userInput }: ControlsProps) {
  return (
    <div>
      <label htmlFor="user-input">Search GitHub Users:</label>
      <br />
      <input 
        type="text" 
        id="user-input"
        aria-label="user-search-text-input"
        value={userInput}
        onChange={ (e) => setUserInput(e.target.value) }
        onKeyUp={(e) => handleUserInput(e.key)}
      />
    </div>
  );
}

export default Controls;
