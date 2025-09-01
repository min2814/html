import { useState } from "react";
import { savePost } from "./api";

function PostForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <div>
      <h2>사용자 추가</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        savePost(name, email);
      }}>
        <input placeholder="이름" value={name} onChange={(e) => {
          setName(e.target.value);
        }} />
        <input placeholder="이메일" value={email} onChange={(e) => {
          setEmail(e.target.value);
        }} />
        <button type="submit">전송</button>
      </form>

      <pre>
        응답 결과
      </pre>
    </div>
  );
}

export default PostForm;
