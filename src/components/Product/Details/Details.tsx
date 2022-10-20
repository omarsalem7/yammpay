import { useState } from 'react';
import Rate from '../../shared/Rate';
import RadioCheck from '../../shared/RadioCheck';
import Button from '../../shared/Button';
import styles from './details.module.css';
import Btn from '../../../assets/icons/image 9.svg';
import Add from '../../../assets/icons/add.svg';
import Sub from '../../../assets/icons/subs.svg';
import Call from '../../../assets/icons/call.svg';

type DetailsPropType = {
  data: {
    code: string;
    title: string;
    stars: number;
    shipping: number;
    capacity: string[];
    colors: string[];
  };
};
const Details = ({ data }: DetailsPropType) => {
  const [counter, setCounter] = useState(1);
  return (
    <div>
      <h1 className={styles.title}>{data.title}</h1>
      <div className={styles.review}>
        <span className={styles.gray}>Product Code: {data.code}</span>
        <Rate stars={data.stars} />
        <span>
          4.6<span className={styles.gray}>(200)</span>
        </span>
      </div>
      <ul className={styles.pieces}>
        <li>
          <small>10-25 Pieces</small>
          <h2>AED 1,150,50.00</h2>
        </li>
        <li>
          <small>10-19 Pieces</small>
          <h2>$ 1,145.00</h2>
        </li>
        <li>
          <small>50+ Pieces</small>
          <h2>$1,145.00</h2>
        </li>
      </ul>

      <div>
        <h3>Availble color</h3>
        <div className={styles.dflex}>
          {data.colors.map((color) => (
            <RadioCheck key={Math.random() * 100} name="color" value={color}>
              <span>
                <img src={Btn} alt="btn" />
                {color}
              </span>
            </RadioCheck>
          ))}
        </div>
      </div>
      <div>
        <h3>Storage capacity</h3>
        <div className={styles.dflex}>
          {data.capacity.map((cap) => (
            <RadioCheck key={Math.random() * 100} name="storage" value={cap}>
              <span>
                <span className={styles.fsXL}>{cap}</span> <sub>GB</sub>
              </span>
            </RadioCheck>
          ))}
        </div>
      </div>
      <div className={styles.pad15}>
        Quantity <span style={{ color: 'red' }}>$12,000</span>
      </div>
      <div>
        <div className={styles.counterContainer}>
          <div className={styles.counterBtn}>
            <img
              onClick={() => setCounter((prev) => prev + 1)}
              src={Add}
              alt="add"
            />
            <img
              onClick={() => setCounter((prev) => prev - 1)}
              src={Sub}
              alt="sub"
            />
          </div>
          <div>{counter} pieces</div>
        </div>
      </div>
      <div className={styles.pad20}>
        Shipping <span style={{ color: 'red' }}>$12,000</span>
      </div>

      <div className={`${styles.dflex} ${styles.pad20}`}>
        <h3>Total</h3>
        <span style={{ color: 'var(--green)' }} className={styles.fsXL}>
          $12,100
        </span>
      </div>

      <div className={`${styles.dflex} ${styles.pad15}`}>
        <Button color="var(--green)">
          <span>Place order now</span>
        </Button>
        <Button color="var(--dark)">
          <span className={styles.dflex}>
            <img src={Call} alt="call" />
            Call us
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Details;
