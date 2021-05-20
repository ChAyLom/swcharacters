import { FC } from 'react';
import { QueryClientProvider } from 'react-query';
import Router from './Components/Router';
import { queryClient } from './libs/queryClient';
import styles from './App.scss';
import Localization from './Components/Localization';

const App: FC = () => {
  return <QueryClientProvider
    client={queryClient}
  >
    <div className={styles.app_cont}>
      <Localization>
        <Router />
      </Localization>
    </div>
  </QueryClientProvider>;
};

export default App;