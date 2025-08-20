import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Form() {
  return (
    <form action="/action" method="get">
      <Label />
      <Check />
      <Radio />
    </form>
  )
}
function Label() {
  return (
    <>
      <label for="fname">First name:</label>
      <br />
      <input type="text" id="fname" value="John" name="a" disabled />
      <br />
      <label for="lname">Last name:</label><br />
      <input type="text" id="lname" value="Doe" name="b" />
      <br />
      <br />
    </>
  )
}
function Check() {
  return (
    <>
      <input type="checkbox" name="time" value="0800" /> 08:00
      <input type="checkbox" name="time" value="1200" /> 12:00
      <hr />
    </>
  )
}
function Radio() {
  return (
    <>
      <input type="radio" name="job" value="developer" /> 개발자
      <input type="radio" name="job" value="designer" /> 디자이너
      <input type="submit" value="Submit" />
    </>
  )
}
function App() {

  return (
    <>
      <Form />
    </>

  )
}

export default App
