import styles from './Navbar.module.css';
import Bag from '../../assets/icons/bag.svg';
import Burger from '../../assets/icons/burger.svg';

const Navbar = () => {
  return (
    <nav>
      <ul className={styles.navItems}>
        <li>ZUMAR</li>
        <ul>
          <li>Services</li>
          <li>Orders</li>
          <li>Account</li>
          <li>
            <img src={Bag} alt="bag" />
          </li>
          <li>
            <img src={Burger} alt="burger" />
          </li>
        </ul>
      </ul>
    </nav>
  );
};

export default Navbar;
