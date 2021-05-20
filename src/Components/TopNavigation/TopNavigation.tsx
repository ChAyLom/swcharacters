import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import styles from './TopNavigation.scss';

const TopNavigation: FC = () => {
  return <div className={styles.cont}>
    <Link
      className={styles.back_link}
      to="/"
    >
      <FormattedMessage
        id="back"
      />
    </Link>
  </div>;
};

export default TopNavigation;