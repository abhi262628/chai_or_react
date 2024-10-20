import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(15);
  const [buttonColor, setButtonColor] = useState('');

  function increaseCount() {
    if (counter < 20) {
      const newCounter = counter + 1;
      setCounter((newCounter)=> newCounter);
      setCounter((newCounter)=> newCounter);
      setCounter((newCounter)=> newCounter);

      if (newCounter === 20) {
        setButtonColor('red'); // Set color when the counter reaches 20
      }
      else if(counter > 0)
      {
         setButtonColor('')
      }
    }
  }

  function decreaseCount() {
    if (counter > 0) {
      const newCounter = counter - 1;
      setCounter(newCounter);

      if (newCounter === 0) {
        setButtonColor('blue'); // Reset color when the counter reaches 0
      } else if (newCounter < 20) {
        setButtonColor(''); // Reset color when the counter is below 20
      }
    }
  }

  return (
    <div>
      <h1>Counter Value: {counter}</h1>
      <button
        onClick={increaseCount}
      >Increase Count {counter}
      </button>
      <button
        onClick={decreaseCount}
        style={{ backgroundColor: buttonColor }}
      >
        Decrease Count {counter}
      </button>
    </div>
  );
}

export default App;
