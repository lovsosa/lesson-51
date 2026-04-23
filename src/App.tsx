import { useState } from 'react';
import Circle from './components/Circle/Circle';
import './App.css';

const App = () => {
  const [numbers, setNumbers] = useState([5, 11, 16, 23, 32]);

  const getRandomNum = () => {
    const randomNumbers: number[] = [];

    while (randomNumbers.length < 5) {
      const randomInt: number = Math.floor(Math.random() * 32 + 5);
      if (!randomNumbers.includes(randomInt)) {
        randomNumbers.push(randomInt);
      }
    }

    randomNumbers.sort((a, b) => a - b);
    setNumbers([...randomNumbers]);
  };

  return (
    <div className="app">
      <button className="btn" type="button" onClick={getRandomNum}>
        Получить числа
      </button>
      <div className="circles">
        {numbers.map((num) => (
          <Circle key={num} content={num} />
        ))}
      </div>
    </div>
  );
};

export default App;
