import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import styles from '../../App.scss';

const NotFound: FC = () => {
  return <div className={styles.error_text}>
    <FormattedMessage id="planetFotFound"/>
  </div>;
};

export default NotFound;