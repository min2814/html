import { useState } from "react";
import { savePost2 } from "./api";

function PostForm2() {
  const [userId, setUserId] = useState('');
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  return (
    <div>
      <h2>게시글 추가</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        savePost2(userId, id, title, body);
      }}>
        <input placeholder="유저아이디" value={userId} onChange={(e) => {
          setUserId(e.target.value);
        }} />
        <input placeholder="아이디" value={id} onChange={(e) => {
          setId(e.target.value);
        }} />
        <input placeholder="제목" value={title} onChange={(e) => {
          setTitle(e.target.value);
        }} />
        <input placeholder="바디" value={body} onChange={(e) => {
          setBody(e.target.value);
        }} />
        <button type="submit">전송</button>
      </form>

      <pre>
        응답 결과 {userId} {id} {title} {body}
      </pre>
    </div>
  );
}

export default PostForm2;
