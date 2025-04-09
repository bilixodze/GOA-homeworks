// App.jsx
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0); // საწყისი მნიშვნელობა 0

  const increment = () => {
    setCount(count + 1); // ყოველი დაჭერისას count იზრდება 1-ით
  };

  return (
    <main style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </main>
  );
}

export default App;
