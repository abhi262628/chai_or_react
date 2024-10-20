import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const anotheruser = "GOOOGGGLEEE"

function Myreact() {
  return(
  <a href="http://google.com" target='_blank'>
      click me to visit google {anotheruser}
  </a>
  )
  };

createRoot(document.getElementById('root')).render(
    <App/>
)
