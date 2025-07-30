// CounterDisplay.js
import React, { useContext } from 'react';
import { CounterContext } from './CounterContext';

function CounterDisplay() {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })} style={{ marginLeft: '10px' }}>
        Decrement
      </button>
    </div>
  );
}

export default CounterDisplay;
