import { FC, Fragment } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { planetFetcher } from '../../libs/fetches';
import { getIdFromUrl } from '../../libs/utils';
import LoadingSpin from '../LoadingSpin/LoadingSpin';
import PeoplesList from '../PeoplesList/PeoplesList';
import PlanetBlock from './PlanetBlock';

interface Params {
  planetId: string
}

const PlanetView: FC = () => {
  const { planetId } = useParams<Params>();
  const { data: planet, isFetched, isLoading, isError } = useQuery(
    ['planet', planetId],
    () => planetFetcher(planetId)
  );

  return <Fragment>
    {(isFetched && planet) && <Fragment>
      <PlanetBlock
        planet={planet}
      />
      <PeoplesList
        peopleIds={planet.residents.map(url => getIdFromUrl(url))}
      />
    </Fragment>}
    {isLoading && <LoadingSpin />}
    {isError && <div>error</div>}
  </Fragment>;
};

export default PlanetView;