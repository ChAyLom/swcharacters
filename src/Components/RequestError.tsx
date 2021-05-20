import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import styles from '../App.scss';

const RequestError: FC = () => {
  return <div className={styles.error_text}>
    <FormattedMessage id="requestError"/>
  </div>;
};

export default RequestError;