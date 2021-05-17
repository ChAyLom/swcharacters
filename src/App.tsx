import React, { FC, Fragment } from 'react';
import styles from './styles.scss';

interface Props {
  name: string,
}

const App: FC<Props> = ({
  name
}) => {
  return <Fragment>
    <h1 className={styles.header}>
      Hello {name}
    </h1>
  </Fragment>;
};

export default App;