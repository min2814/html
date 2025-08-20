import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Header() {
  return (
    <>
      <header>
        <h1>WEB</h1>
        World Wide Web!
      </header>
    </>
  )
}
function Nav() {
  return (
    <nav>
      <ul>
        <li><a href="1.html">HTML</a></li>
        <li><a href="2.html">CSS</a></li>
        <li><a href="3.html">JavaScript</a></li>
      </ul>
    </nav>
  )
}
function App() {
  return (
    <>
      <Header />
      <Nav />
    </>
  )
}
export default App
