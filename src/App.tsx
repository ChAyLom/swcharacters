import { FC } from 'react';
import { QueryClientProvider } from 'react-query';
import PeopleProvider from './Components/PeoplesProvider';
import Router from './Components/Router';
import { queryClient } from './libs/queryClient';
import styles from './App.scss';

const App: FC = () => {
  return <QueryClientProvider
    client={queryClient}
  >
    <PeopleProvider>
      <div className={styles.app_cont}>
        <Router />
      </div>
    </PeopleProvider>
  </QueryClientProvider>;
};

export default App;