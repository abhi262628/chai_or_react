import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)
  
  // let counter = 15
  const addvalue = () =>
  {
    if(counter <20)
    {
       counter = counter+1;
       setCounter(counter)
    }
    // console.log("Clicked",counter);
  }
  const remove = () =>
    {
      if(counter >0)
        {
           counter = counter-1;
           setCounter(counter)
        }
    // console.log("Clicked",counter);
    }

  return (
   <>
        <h1>Chai OR React</h1>
        <h2>Conter value : {counter}</h2>

        <button
        onClick={addvalue}
        >Add value</button>
        <button onClick={remove}>Remove value</button>
        <br />
   </>
  )
}

export default App
