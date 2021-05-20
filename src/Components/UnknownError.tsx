import { FC } from 'react';
import styles from '../App.scss';

const UnknownError: FC = () => {
  return <div className={styles.error_text}>
    An error occurred during request
  </div>;
};

export default UnknownError;