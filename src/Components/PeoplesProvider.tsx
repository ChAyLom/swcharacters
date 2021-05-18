import { createContext, FC } from 'react';
import { useQuery } from 'react-query';
import { People } from '../entities';
import { allPeoplesFetcher } from '../libs/fetches';

interface PeoplesContextValue {
  peoples: People[],
  isLoading?: boolean,
  isFetched?: boolean,
  isError?: boolean
}

export const PeoplesContext = createContext<PeoplesContextValue>({ peoples: [] });

const PeopleProvider: FC = ({ children }) => {
  const {
    data,
    isLoading,
    isFetched,
    isError,
  } = useQuery(
    'peoples', allPeoplesFetcher
  );

  const value: PeoplesContextValue = {
    peoples: data || [],
    isLoading,
    isFetched,
    isError,
  };

  return <PeoplesContext.Provider value={value}>
    {children}
  </PeoplesContext.Provider>;
};

export default PeopleProvider;