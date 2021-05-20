import { FC } from 'react';
import styles from '../../App.scss';

const NotFound: FC = () => {
  return <div className={styles.error_text}>
    This planet doesn't exist
  </div>;
};

export default NotFound;