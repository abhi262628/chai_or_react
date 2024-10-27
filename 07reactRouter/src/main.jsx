import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/about.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import GitHub, { githubInfoLoader } from './components/Github/GitHub.jsx'

// const router = BrowserRouter([{
//     path : '/',
//     element : <Layout/>,
//     children : [
//       {
//         path : "",
//         element : <Home/>
//       },
//       {
//         path : "about",
//         element : <About/>
//       },
//       {
//         path : "about",
//         element : <About/>
//       },
//     ]
// }])
const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element = {<Layout/>}>
        <Route path='' element = {<Home/>}></Route>
        <Route path='about' element = {<About/>}></Route>
        <Route path='contact' element = {<Contact/>}></Route>
        <Route path='user/:userid' element = {<User/>}></Route>
        <Route path='github' element = {<GitHub/>}
        loader = {githubInfoLoader}
        ></Route>
      </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}/> 
  </StrictMode>,
)
