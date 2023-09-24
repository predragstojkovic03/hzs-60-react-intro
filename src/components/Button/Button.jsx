import styles from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      Add
    </button>
  );
};

export default Button;
