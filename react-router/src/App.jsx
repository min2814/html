import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Link, Route, Routes, NavLink, useParams, useLocation } from "react-router-dom";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function Component1() {
    return <div>
      1
      번 화면</div>
  }
  function Component2() {
    return <div>
      2
      번 화면</div>
  }
  function Component3() {
    return <div>
      3
      번 화면</div>
  }

  function ComponentN() {
    const { number } = useParams();
    return <div>(1~3제외) {number}번 화면</div>
  }

  function ComponentAZ() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    const name = searchParams.get('name');
    return <div>ID-{id}, NAME-{name}</div>
  }
  return (
    <BrowserRouter>
      <div>
        <Link to='/1'>1번으로 이동</Link> /&nbsp;
        <Link to='/2'>2번으로 이동</Link> /&nbsp;
        <Link to='/3'>3번으로 이동</Link> /&nbsp;
        <Link to='/4'>4번으로 이동</Link> /&nbsp;
        <Link to='/5'>5번으로 이동</Link>
        <Routes>
          <Route path='/az' element={<ComponentAZ />} />
          <Route path='/1' element={<Component1 />} />
          <Route path='/2' element={<Component2 />} />
          <Route path='/3' element={<Component3 />} />
          <Route path='/:number' element={<ComponentN />} />
        </Routes>

        <footer style={
          {
            marginTop: '50px',
            background: 'lightblue'
          }
        }>꼬리말</footer>
      </div>
    </BrowserRouter >


  )
}

export default App
