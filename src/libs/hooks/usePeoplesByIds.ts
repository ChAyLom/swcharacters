import { useQueries } from 'react-query';
import { People } from '../../entities';
import { peopleFetch } from '../fetches';

interface UsePeoplesByIdsResult {
  peoples: People[],
  isFetched: boolean,
  isError: boolean,
  isLoading: boolean,
}

const usePeoplesByIds = (ids: string[]): UsePeoplesByIdsResult => {
  const queriesResults = useQueries(
    ids.map(id => ({
      queryKey: ['people', id],
      queryFn: () => peopleFetch(id)
    }))
  );
  
  const isLoading = queriesResults.some(res => res.isLoading);
  const isFetched = queriesResults.every(res => res.isFetched);
  const isError = !isLoading && queriesResults.some(res => res.isError);
  const peoples = ((
    isFetched && !isError
  ) ? (
    queriesResults.map(
      res => res.data
    ).filter(
      people => people
    )
  ) : []) as People[];

  return {
    peoples,
    isLoading,
    isFetched,
    isError,
  };
};

export default usePeoplesByIds;