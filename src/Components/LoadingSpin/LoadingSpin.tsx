import { FC } from 'react';
import styles from './LoadingSpin.scss';

const LoadingSpin: FC = () => {
  return <div className={styles.cont}>
    <div className={styles.round}></div>
  </div>;
};

export default LoadingSpin;