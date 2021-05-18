import { FC, Fragment } from 'react';
import { useQuery } from 'react-query';
import { planetsFetcher } from '../../libs/fetches';
import PlanetCard from '../PlanetCard/PlanetCard';

const PlanetsList: FC = () => {
  const { data, isFetched, isLoading, isError } = useQuery(
    'planets', () => planetsFetcher(1)
  );

  return <Fragment>
    planets list
    {isFetched && data?.results.map(
      planet => <PlanetCard
        key={planet.url}
        planet={planet}
      />
    )}
    {isLoading && <div>
      loading
    </div>}
    {isError && <div>
      error
    </div>}
  </Fragment>;
};

export default PlanetsList;