import { use, useState } from 'react';
import './App.css';

const App = () => {

  const [checked, setChecked] = useState(false);
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pwc, setPwc] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = () => {
    alert(`[입력된 내용],
아이디: ${id},
비밀번호: ${pw},
이메일: ${email},
전화번호: ${phone},
주소: ${address}`)
  }


  return (



    <div className="container">
      <h2>회원 가입</h2>
      <form>
        <div className="form-group">
          <input
            type="checkbox"
            id="agree"
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
          />
          <label className='agree' htmlFor="agree">이용약관에 모두 동의합니다</label>
        </div>

        {checked == true &&
          <div>
            <div className="form-group">
              <label htmlFor="userId">사용자 아이디</label>
              <input
                type="text"
                id="userId"
                name="userId"
                value={id}
                onChange={(e) => {
                  setId(e.target.value);
                }}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">비밀번호</label>
              <input
                type="password"
                id="password"
                name="password"
                value={pw}
                onChange={(e) => {
                  setPw(e.target.value);
                }}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">비밀번호 확인</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={pwc}
                onChange={(e) => {
                  setPwc(e.target.value);
                }}
                required
              />
              {pw != pwc && <label id="pw-match" className="pw-match">비밀번호가 일치해야 됩니다.</label>}

            </div>

            <div className="form-group">
              <label htmlFor="email">이메일</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber">전화번호</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">주소</label>
              <input
                type="text"
                id="address"
                name="address"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                required
              />
            </div>

            <button type="submit" onClick={handleSubmit}>제출</button>
          </div>}
      </form>
    </div>
  );
};

export default App;
