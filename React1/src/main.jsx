import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp()
{
    return <div><h1>Virat Kohli</h1></div>
}

let a = 5;
const reactElement = React.createElement(
  'a',
  {href:'https://youtube.com',target:'_blank'},
  'click to visit youtube',
  a
)

ReactDOM.createRoot(document.getElementById('root')).render(
      // reactElement
      <App />
)
