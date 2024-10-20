import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind</h1>
    {/* Flex container for cards */}
    <div className="flex space-x-4 p-4"> {/* Added padding and spacing between cards */}
      <Card username="Abhishek" btntext="Visit ME" />
      <Card username="Lalita" btntext="Click me" />
    </div>
  </>
  )
}

export default App
