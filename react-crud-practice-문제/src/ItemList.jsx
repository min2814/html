import Item from "./Item";

function ItemList({ items, onUpdate, onDelete }) {
  //3. 아이템 없으면 메시지 출력
  if (items.length == 0) {
    return <p>현재 아이템이 없습니다.</p>;
  }

  return (
    <ul style={styles.list}>
      {items.map((item, index) => (
        <Item
          key={index}
          index={index}
          item={item}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

const styles = {
  list: {
    listStyle: "none",
    padding: 0,
    marginTop: "20px",
  },
};

export default ItemList;
