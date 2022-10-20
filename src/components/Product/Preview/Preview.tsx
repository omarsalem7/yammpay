import styles from './Preview.module.css';
import mainImg from '../../../assets/mainProduct.png';
import Img1 from '../../../assets/image1.png';
import Img2 from '../../../assets/image2.png';
import Img3 from '../../../assets/image3.png';

const Preview = () => {
  return (
    <div className={styles.preview}>
      <div>
        <img src={mainImg} draggable={false} alt="main preview product" />
      </div>
      <div className={styles.subImgs}>
        <img draggable={false} src={Img1} alt="img1" />
        <img draggable={false} src={Img2} alt="img2" />
        <img draggable={false} src={Img3} alt="img3" />
      </div>
    </div>
  );
};

export default Preview;
