import { useState } from "react";
import ItemList from "./ItemList";

function App() {
  const [items, setItems] = useState(["🍎 사과", "🍌 바나나"]);

  const [input, setInput] = useState("");

  // Create
  const addItem = () => {
    if (input.trim() === "") return;
    //1. 중복 저장 방지
    if (items.includes(input.trim())) {
      return;
    }
    setItems([...items, input]);
    setInput("");
  };

  // Update
  const updateItem = (index, newValue) => {
    const newItems = [...items];
    newItems[index] = newValue;
    setItems(newItems);
  };

  // Delete
  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>✨ 간단한 CRUD 연습 ✨</h2>

      {/* 입력창 */}
      <input
        style={styles.input}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        //2. enter 키 저장
        onKeyDown={(e) => {
          if (e.key == 'Enter') {
            addItem();
          }
        }}
        placeholder="아이템 입력..."
      />
      <button style={styles.button} onClick={addItem}>
        추가
      </button>


      {/* 목록 */}
      <ItemList items={items} onUpdate={updateItem} onDelete={deleteItem} />
      {/* 5. 전체 삭제 버튼 구현 */}
      <div>
        <button style={styles.button} onClick={() => {
          setItems([]);
        }}> 전체 삭제</button>
      </div>
    </div >
  );
}

const styles = {
  container: {
    padding: "20px",
    maxWidth: "400px",
    margin: "50px auto",
    borderRadius: "16px",
    background: "#f9f9ff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  title: { color: "#4a6ee0", marginBottom: "20px" },
  input: {
    padding: "8px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginRight: "8px",
  },
  button: {
    padding: "8px 12px",
    border: "none",
    borderRadius: "8px",
    background: "#4a6ee0",
    color: "white",
    cursor: "pointer",
  },
};

export default App;
