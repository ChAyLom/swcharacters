import { FC } from 'react';
import { QueryClientProvider } from 'react-query';
import PeopleProvider from './Components/PeoplesProvider';
import Router from './Components/Router';
import { queryClient } from './libs/queryClient';

const App: FC = () => {
  return <QueryClientProvider
    client={queryClient}
  >
    <PeopleProvider>
      <Router />
    </PeopleProvider>
  </QueryClientProvider>;
};

export default App;