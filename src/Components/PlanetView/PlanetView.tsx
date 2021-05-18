import { FC, Fragment } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { planetFetcher } from '../../libs/fetchers';
import PeoplesList from './PeoplesList';
import styles from './PlanetView.scss';

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
    planet view
    {(isFetched && planet) && <Fragment>
      <div>{planet.name}</div>
      <PeoplesList
        planet={planet}
      />
    </Fragment>}
    {isLoading && <div>loading</div>}
    {isError && <div>error</div>}
  </Fragment>;
};

export default PlanetView;