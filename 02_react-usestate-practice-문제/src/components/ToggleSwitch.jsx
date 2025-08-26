import { useState } from "react"

export default function ToggleSwitch() {

  {/* TODO: on이라는 boolean 상태를 만들고 초기값을 false로 설정하세요. */ }
  const [on, setOn] = useState(false);

  return (
    <section>
      <h2>3) ON / OFF 토글</h2>
      <div className="center">

        {/* TODO: 상태에 따라 'ON' 또는 'OFF'를 표시하세요. */}
        {
          on ? <span className="badge">ON</span> : <span className="badge">OFF</span>
        }


        {/* 
          TODO: 상태를 반대로 토글하고 
          상태에 따라 버튼 레이블을 '켜기' 또는 '끄기'로 표시하세요.
        */}
        {
          on ? <button onClick={() => {
            setOn(false);
          }}>끄기</button> : <button onClick={() => {
            setOn(true);
          }}>켜기</button>
        }


      </div>
    </section>
  )
}
