import { useState } from 'react';
import './App.css';
import styles from './App.module.css';

function Title() {
  return (
    <div className="title">
      <h1>가위 바위 보 게임</h1>
    </div>
  );
}

function Result(props) {
  return (
    <div className="result">
      <h1>Com: {props.com}</h1>
      <h1>Player: {props.player}</h1>
      <h1>{props.result}</h1>
    </div>
  );
}

function Scissors(props) {
  return (
    <div className={styles.control}>
      <img
        src="http://ggoreb.com/images/react/scissors.png"
        onClick={() => props.change(1)}
        alt="scissors"
      />
    </div>
  );
}

function Rock(props) {
  return (
    <div className={styles.control}>
      <img
        src="http://ggoreb.com/images/react/rock.png"
        onClick={() => props.change(2)}
        alt="rock"
      />
    </div>
  );
}

function Paper(props) {
  return (
    <div className={styles.control}>
      <img
        src="http://ggoreb.com/images/react/paper.png"
        onClick={() => props.change(3)}
        alt="paper"
      />
    </div>
  );
}

// 승패 판정 함수
function judge(player, com) {
  if (player === com) return "비김";
  if (
    (player === 1 && com === 3) || // 가위 vs 보
    (player === 2 && com === 1) || // 바위 vs 가위
    (player === 3 && com === 2)    // 보 vs 바위
  ) {
    return "이김";
  }
  return "짐";
}

function App() {
  const [player, setPlayer] = useState(null);
  const [com, setCom] = useState(null);
  const [result, setResult] = useState("선택해주세요");

  const handlePlayerChoice = (choice) => {
    const computer = Math.floor(Math.random() * 3) + 1; // 1~3
    setPlayer(choice);
    setCom(computer);
    setResult(judge(choice, computer));
  };

  return (
    <>
      <Title />
      <Scissors change={handlePlayerChoice} />
      <Rock change={handlePlayerChoice} />
      <Paper change={handlePlayerChoice} />
      <Result player={player} com={com} result={result} />
    </>
  );
}

export default App;
