import { useState, useCallback, useEffect, useRef } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [length, setLength] = useState(8); // Default length set to 8
  const [numberAllowed, setNumber] = useState(false);
  const [charAllowed, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789"; // Correctly concatenate numbers
    if (charAllowed) str += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"; // Correctly concatenate special characters

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length); // Fix here
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [length, charAllowed, numberAllowed]);

  useEffect(() => {
    PasswordGenerator();
  }, [length, charAllowed, numberAllowed, PasswordGenerator]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="w-full p-4 max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            className="outline-none w-full py-1 px-3"
            type="text"
            value={password}
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0">Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={1} // You can change this if you want a different min value
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => { setLength(e.target.value); }} // Fixing capitalization
            />
            <label>Length : {length}</label>
            <input
              type="checkbox"
              checked={numberAllowed} // Correctly reference the state variable
              className="cursor-pointer"
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label>Number {numberAllowed ? '✓' : '✗'}</label>
            <input
              type="checkbox"
              checked={charAllowed} // Correctly reference the state variable
              className="cursor-pointer"
              onChange={() => {
                setChar((prev) => !prev);
              }}
            />
            <label>Characters {charAllowed ? '✓' : '✗'}</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
