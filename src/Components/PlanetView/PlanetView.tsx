import { FC, Fragment } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { planetFetcher } from '../../libs/fetches';
import LoadingSpin from '../LoadingSpin/LoadingSpin';
import PeoplesList from '../PeoplesList/PeoplesList';
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
    {(isFetched && planet) && <Fragment>
      <div className={styles.header}>
        Planet {planet.name}
      </div>
      <PeoplesList
        planet={planet}
      />
    </Fragment>}
    {isLoading && <LoadingSpin />}
    {isError && <div>error</div>}
  </Fragment>;
};

export default PlanetView;