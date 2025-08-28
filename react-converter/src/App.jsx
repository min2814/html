import { useState } from 'react';
import './App.css';

const MinutesToHours = () => {
  const [time, setTime] = useState('');  // 문자열로 관리
  const [hour, setHour] = useState('');
  const [on, setOn] = useState(true);

  return (
    <div>
      <h3>Minutes To Hours</h3>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input
          type="number"
          id="minutes"
          placeholder="Minutes"
          value={on ? time : (hour === '' ? '' : Number(hour) * 60)}
          onChange={(e) => setTime(e.target.value)}
          disabled={!on}
        />
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input
          type="number"
          id="hours"
          placeholder="Hours"
          value={on ? (time === '' ? '' : Number(time) / 60) : hour}
          onChange={(e) => setHour(e.target.value)}
          disabled={on}
        />
      </div>
      <button onClick={() => {
        setTime('');
        setHour('');
        setOn(true);
      }}>Reset</button>
      <button onClick={() => {
        setTime(on ? time : (hour === '' ? '' : Number(hour) * 60));
        setHour(on ? (time === '' ? '' : Number(time) / 60) : hour);
        setOn(!on);
      }}>Flip</button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <MinutesToHours />
    </div>
  )
}

export default App;
