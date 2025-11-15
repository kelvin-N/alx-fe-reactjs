import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Initialize state

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2>Simple Counter</h2>
      <p style={{ fontSize: '20px', marginBottom: '15px' }}>Current Count: {count}</p>
      
      <button 
        onClick={() => setCount(count + 1)} 
        style={{ marginRight: '10px', padding: '10px 15px' }}
      >
        Increment
      </button>

      <button 
        onClick={() => setCount(count - 1)} 
        style={{ marginRight: '10px', padding: '10px 15px' }}
      >
        Decrement
      </button>

      <button 
        onClick={() => setCount(0)} 
        style={{ padding: '10px 15px' }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
