import { useState } from "react";

const style = {
    fontSize: "2rem",
    backgroundColor: "lightgray"
}

function Header(props) {
    const [state, setState] = useState(0);
    const [input, setInput] = useState('');
    return (
        <>
            <header>
                <input value={input} onChange={(e) => {
                    let v = e.target.value;
                    setInput(v);
                }}></input>
                <h1 style={
                    {
                        color: props.color,
                        backgroundColor: "yellow"
                    }
                }
                    onClick={() => {
                        setState(prev => prev + 1);
                    }}
                >
                    {state}</h1>
                <p style={style}>{props.world}</p>
            </header>
        </>
    )
}
export default Header;