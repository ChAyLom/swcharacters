import { FC } from 'react';
import { QueryClientProvider } from 'react-query';
import Router from './Components/Router';
import { queryClient } from './libs/queryClient';

const App: FC = () => {
  return <QueryClientProvider
    client={queryClient}
  >
    <Router />
  </QueryClientProvider>;
};

export default App;