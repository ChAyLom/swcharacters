import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './TopNavigation.scss';

const TopNavigation: FC = () => {
  return <div className={styles.cont}>
    <Link
      className={styles.back_link}
      to="/"
    >
      Back
    </Link>
  </div>;
};

export default TopNavigation;