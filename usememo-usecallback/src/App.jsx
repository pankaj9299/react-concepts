import React, { useState, useCallback, useMemo } from 'react';
import Buttons from './Buttons';

export default function App() {
  const [count, setCount] = useState(1);
  const [num, setNum] = useState(1);
  const [theme, setTheme] = useState('light');
  const addition = useCallback(() => {
    console.log('addition rendering');
    return setCount(count + 1);
  }, []);

  const deletion = useCallback(() => {
    console.log('deletion rendering');
    if (count > 1) return setCount(count - 1);  
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const complexCalc = useMemo(() => {
    console.log('heavyResult calling');
    const heavyResult = num * 9999999 / 13 * Math.random();
    return heavyResult;
  }, [num]);
  return (
    <div className={`App ${theme}`}>
      <h1>Hello React {count}</h1>
      <p>Heavy Result {complexCalc}</p>
      <button onClick={() => setNum(num + 1)}>HeavyResult num +</button>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Buttons onAdd={addition} onDelete={deletion} />

    </div> 
  );
}

// Log to console
console.log('Hello console')