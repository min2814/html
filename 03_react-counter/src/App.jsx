import './App.css';
import styles from './App.module.css';
import { useEffect, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('red');


  const onClick2 = () => {
    setColor('blue');
  }


  console.log(`Counter 컴포넌트가 생성되거나 state가 변경되어 렌더링 될 때마다 실행`);
  useEffect(() => {
    console.log(`Counter 컴포넌트가 생성 될 때만 실행`);

    return () => {
      console.log(`Counter 컴포넌트 제거`);
    }

  }, []);

  useEffect(() => {
    console.log(`Counter 컴포넌트 생성, count 값 변경 될 때 실행`);
  }, [count]);

  useEffect(() => {
    console.log(`Counter 컴포넌트 생성, color 값 변경 될 때 실행`);
  }, [color])
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onClick2}>Click</button>
    </div>
  )
}
//이야 컴공 ~
function App() {
  const [toc, setToc] = useState([]);
  const [hide, setHide] = useState(false);

  const [weather, setWeather] = useState({});

  const onClick = () => {
    setHide(!hide);
    fetchToc();
    fetchWeather();
  }



  function fetchToc() {
    const url = 'http://ggoreb.com/api/toc.jsp'
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {


        const result = data.map(v => v.title);
        setToc(result);


      })



  }
  async function fetchWeather() {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=35.1728639953646&lon=129.130680529903&units=metric&appid=6edee3c2aa182bc44d18ccb204c98a31';
    const res = await fetch(url);
    const data = await res.json();
    const result = {
      temp: data.main.temp,
      icon: data.weather[0].icon,
      description: data.weather[0].description
    };


    setWeather(result);

  }
  return (
    <div>
      <button onClick={onClick}>Hide</button>


      {hide ? null : <Counter />}

      <ul>
        {
          toc.map((v, i) => <li key={i}>{v}</li>)

        }
      </ul>
      <ul>

        {weather.temp} / {weather.description}
        <img src={`https://openweathermap.org/img/wn/${weather.icon}.png`} alt={weather.description} />


      </ul>



    </div>
  )
}

export default App;
