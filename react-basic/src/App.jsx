import { useState } from 'react'
import './App.css'
import styleAvatar from './Avatar.module.css'
import Header from './Header.jsx'




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


function Nav(props) {
  const [index, setIndex] = useState(null);
  const [content, setContent] = useState('');
  return (
    <nav>
      <ul>
        {
          props.list.map((v, i) => {
            return (
              <li key={i}>
                {
                  i == index ?
                    <>
                      <input value={content} onChange={(e) => {
                        setContent(e.target.value);
                      }}></input>
                      <button onClick={() => {
                        setIndex(i)
                        props.update(i, content);
                      }}>저장</button>
                    </> :

                    <>
                      <a href="1.html">{v}</a>
                      <button onClick={() => {
                        setIndex(i)
                      }}>수정</button>

                      <button onClick={() => {
                        console.log('삭제 :' + i);
                        props.deleteFunc(i);
                      }}>삭제</button>

                      {/* {
                  update == false ? <a href="1.html">{v}</a> 
                  : (index == i && <input value={v}></input>)
                } */}

                    </>
                }
              </li>
            )
          })}
      </ul>
    </nav>
  )
}

function App() {

  const [list, setList] = useState(['HTML', 'CSS', 'JAVASCRIPT']);
  const [color, setColor] = useState('red');
  const [value, setValue] = useState('');

  const updateFunc = (index, newvalue) => {
    const newlist = [...list];
    newlist[index] = newvalue;
    setList(newlist);
  }

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
      <Header name="WEB2" world="click" color={color} />
      <input type='text' value={value} onChange={(e) => {
        const value2 = e.target.value;
        setValue(value2);
      }}></input>
      <button onClick={() => {
        list.push(value);
        console.log(list);
        const list2 = [...list];
        setList(list2);

        //버튼 색 바꾸기
        if (color == 'red') {
          setColor('blue');
        }
        else if (color == 'blue') {
          setColor('red');
        }
      }}>추가</button>
      <Nav list={list} deleteFunc={(i) => {
        console.log(i);
        const list2 = [...list];
        // list2.splice(i, 1);        splice 쓰는 방법

        const arr = list2.filter((_, index) => index != i);     //filter 쓰는 방법
        setList(arr);
      }} update={updateFunc} />


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