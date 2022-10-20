import Rate from '../../shared/Rate';
import RadioCheck from '../../shared/RadioCheck';
import styles from './details.module.css';
type DetailsPropType = {
  data: {
    code: string;
    title: string;
    stars: number;
    shipping: number;
    capacity: number[];
    colors: string[];
  };
};
const Details = ({ data }: DetailsPropType) => {
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
        <div>
          {data.colors.map((color) => (
            <RadioCheck key={Math.random() * 100} name="color" value={color}>
              <span>{color}</span>
            </RadioCheck>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
