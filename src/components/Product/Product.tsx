import { useState } from 'react';
import Preview from './Preview/Preview';
import Details from './Details/Details';
import styles from './Product.module.css';

const Product = () => {
  const [data, setdata] = useState({
    code: '50045',
    title:
      'Single SIM 11 Pro Max Phone Gold 512GB6.5 Inch Hot Selling Phone Wholesale ',
    stars: 5,
    colors: ['Black', 'Red', 'Green'],
    shipping: 100,
    capacity: [128, 256, 512],
  });
  return (
    <div className={styles.product}>
      <Preview />
      <Details data={data} />
    </div>
  );
};

export default Product;
