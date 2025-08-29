import { useEffect, useState } from 'react';
import './App.css';
import styles from './App.module.css';

function Title() {
    return (
        <div className='title'>
            <h1>가위 바위 보 게임</h1>
        </div>
    );
}

function Result(props) {
    return (
        <div className='result'>
            <h1>Com: {props.com_value} {props.com_value == 0 ? "가위" : props.com_value == 1 ? "바위" : "보"}</h1>
            <h1>Player: {props.play_value} {props.play_value == 0 ? "가위" : props.play_value == 1 ? "바위" : "보"}</h1>
            <h1>{props.result}</h1>
        </div>
    );
}

function Scissors(props) {
    return (
        <div className={styles.control}>
            <img src='http://ggoreb.com/images/react/scissors.png'
                onClick={() => { props.change(0) }} />
        </div>
    );
}
function Rock(props) {
    return (
        <div className={styles.control}>
            <img src='http://ggoreb.com/images/react/rock.png'
                onClick={() => { props.change(1) }}></img>
        </div>
    );
}
function Paper(props) {
    return (
        <div className={styles.control}>
            <img src='http://ggoreb.com/images/react/paper.png'
                onClick={() => { props.change(2) }}></img>
        </div>
    );
}

function App() {

    const [player_value, setPValue] = useState(0);
    const [com_value, setCValue] = useState(0);
    const [choose, setChoose] = useState(false);

    useEffect(() => {
        setCValue(Math.floor(Math.random() * 3))
        setChoose(true)
    }, [player_value])

    function res() {
        let msg = ""
        if (com_value == 0) {
            if (player_value == 0) {
                msg = "비겼다"
            }
            else if (player_value == 1) {
                msg = "당신이 이겼다"
            }
            else {
                msg = "당신이 졌다"
            }
        }
        else if (com_value == 1) {
            if (player_value == 0) {
                msg = "당신이 이겼다"
            }
            else if (player_value == 1) {
                msg = "비겼다"
            }
            else {
                msg = "당신이 졌다"
            }
        }
        else {
            if (player_value == 0) {
                msg = "당신이 졌다"
            }
            else if (player_value == 1) {
                msg = "당신이 이겼다"
            }
            else {
                msg = "비겼다"
            }
        }
        return msg;
    }
    return (
        <>
            <Title />
            <Scissors change={setPValue} />
            <Rock change={setPValue} />
            <Paper change={setPValue} />
            <Result play_value={player_value} com_value={com_value} result={res()} />
            <div className='result'>{!choose ? "선택해주세요" : ""}</div>
        </>
    );
}

export default App;