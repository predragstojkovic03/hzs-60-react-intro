import { useEffect, useState } from 'react';

import styles from './ToDoList.module.css';
import Button from '../Button/Button';

const ToDoList = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('promena niza');
  }, [items]);

  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.heading}>To-do list</div>
        <input
          className={styles.input}
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <Button onClick={() => setItems([...items, text])} />
      </div>
      <ul className={styles.items}>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
