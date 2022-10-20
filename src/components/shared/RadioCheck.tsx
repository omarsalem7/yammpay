import styles from './RadioCheck.module.css';
type RadioPropType = {
  name: string;
  value: string;
  children: JSX.Element;
};

const RadioCheck = ({ name, value, children }: RadioPropType) => {
  return (
    <div className={styles.ckButton}>
      <label>
        <input type="radio" name={name} value={value} />
        <span>{children}</span>
      </label>
    </div>
  );
};

export default RadioCheck;
