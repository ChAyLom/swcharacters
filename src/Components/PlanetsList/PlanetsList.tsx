import { FC, Fragment } from 'react';
import { useQuery } from 'react-query';
import { allPlanetsFetch } from '../../libs/fetches';
import LoadingSpin from '../LoadingSpin/LoadingSpin';
import PlanetsCards from './PlanetsCards';
import styles from './PlanetsList.scss';

const PlanetsList: FC = () => {
  const {
    data: planets,
    isFetched,
    isLoading,
    isError,
  } = useQuery('planets', allPlanetsFetch);

  return <Fragment>
    <div className={styles.header}>
      Planets
    </div>
    {(isFetched && planets) && <PlanetsCards
      planets={planets}
    />}
    {isLoading && <LoadingSpin />}
    {isError && <div>
      error
    </div>}
  </Fragment>;
};

export default PlanetsList;