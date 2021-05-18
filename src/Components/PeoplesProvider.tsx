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

/**
 * Load all peoples at once is necessary,
 * because i need to filter people by his homeworld,
 * and swapi doesn't provide search or filter parameter for
 * homeworld field of people entity
 */
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