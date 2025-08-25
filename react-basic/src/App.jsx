import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styleAvatar from './Avatar.module.css'
import Header from './Header.jsx'


function Nav(props) {
  return (
    <nav>
      <ul>
        {props.list.map((v, i) => {
          return <li key={i}><a href="1.html">{v}</a></li>

        })}
      </ul>
    </nav>
  )
}

function Profile(props) {
  return (
    <div>
      <h1>{props.count}</h1>
      {props.name.map((v) => {
        return <li>v</li>;
      })}
      {/* <ul>
        <li>{props.text}</li>
        <li>{props.count}</li>
      </ul> */}
    </div>
  )
}

function Comment(props) {
  return (
    <div className="comment">
      <UserInfo user={props.author} />
      <div className="comment-text">
        {props.text}
      </div>
      <div className="comment-date">
        {props.date}
      </div>
    </div>
  )
}
function UserInfo(props) {
  return (
    <div className="user-info">
      <Avatar user={props.user} />
      <div className="user-info-name">
        {props.user.name}
      </div>
    </div>
  )
}

function Avatar(props) {
  return (
    <img className={styleAvatar.avatar}
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  )
}

function App() {

  const [list, setList] = useState(['HTML', 'CSS', 'JAVASCRIPT']);
  return (
    <>
      {/* <Comment
        author={{
          name: "아바타",
          avatarUrl: "http://ggoreb.com/images/luffy.jpg"
        }}
        text="유연상"
        date="2020-09-10"
      /> */}
      <Header name="WEB2" world="click" />
      <button onClick={() => {
        list.push(1);
        const list2 = [...list];
        setList(list2);
      }}>추가</button>
      <Nav list={list} />


      {/* <Header name="WEB" world="World Wide Web!" />
      <Nav href1="1.html" href2="2.html" href3="3.html" text1="HTML" text2="CSS" text3="Javascript" />
      <Profile count={123} text="hi" name={[10, 20, 30]} /> */}
    </>
  )
}
export default App

//추가 버튼을 클릭 할 때마다
//   < Header > 의 제목 생상이 빨강 -> 파랑
//   파랑 ->빨강