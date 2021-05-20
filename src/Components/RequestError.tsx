import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import styles from '../App.scss';

const RequestError: FC = () => {
  return <div className={styles.error_text}>
    <div><FormattedMessage id="requestError"/></div>
    <div><FormattedMessage id="tryReload"/></div>
  </div>;
};

export default RequestError;