import { useState } from 'react';

const App = () => {
  const [numbers, setNumbers] = useState([5, 7, 10, 23, 31]);
  const getRandomNum = () => {
    const randomNumbers: number[] = [];
    while (true) {
      const randomInt: number = Math.floor(Math.random() * 32 + 5);
      const unicCheck = randomNumbers.includes(randomInt);
      if (!unicCheck) {
        randomNumbers.push(randomInt);
      }
      if (randomNumbers.length >= 5) {
        break;
      }
    }
    randomNumbers.sort((a, b) => a - b);
    setNumbers([...randomNumbers]);
  };
  return (
    <div>
      <button className="btn" type="button" onClick={getRandomNum}>
        Получить числа
      </button>
      {numbers.map((num, i) => (
        <li key={i}>{num}</li>
      ))}
    </div>
  );
};

export default App;
