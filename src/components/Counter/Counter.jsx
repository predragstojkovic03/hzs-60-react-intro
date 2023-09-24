import { useEffect, useState } from 'react';
import styles from './Counter.module.css';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('+');
  }, [counter]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.count}>Count: {counter}</div>
      <button className={styles.btn} onClick={() => setCounter(counter + 1)}>
        Add
      </button>
    </div>
  );
};

export default Counter;
