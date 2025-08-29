import { MdAdd } from 'react-icons/md';
import styles from './TodoInsert.module.css';
import React, { useState, useCallback } from 'react';

const TodoInsert = React.memo((props) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback((e) => {
    props.onInsert(value);
    setValue('');
    e.preventDefault();
  }, [value]);

  return (
    <form className={styles.TodoInsert} >
      <input className={styles.input}
        placeholder="할 일을 입력하세요"
        onChange={onChange} value={value} />
      <button type="button" onClick={onSubmit} className={styles.button}>
        <MdAdd />
      </button>
    </form>
  );
});

export default TodoInsert;
