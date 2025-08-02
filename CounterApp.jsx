import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>React Counter App</h1>
      <h2 style={{ fontSize: '48px' }}>{count}</h2>
      <div>
        <button onClick={() => setCount(count - 1)} style={{ margin: '0 10px' }}>-</button>
        <button onClick={() => setCount(0)} style={{ margin: '0 10px' }}>Reset</button>
        <button onClick={() => setCount(count + 1)} style={{ margin: '0 10px' }}>+</button>
      </div>
    </div>
  );
}

export default App
