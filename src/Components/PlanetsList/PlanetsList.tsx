import { FC, Fragment } from 'react';
import { useQuery } from 'react-query';
import { allPlanetsFetch } from '../../libs/fetches';
import LoadingSpin from '../LoadingSpin/LoadingSpin';
import PlanetCard from '../PlanetCard/PlanetCard';
import PlanetsCards from './PlanetsCards';

const PlanetsList: FC = () => {
  const {
    data: planets,
    isFetched,
    isLoading,
    isError,
  } = useQuery('planets', allPlanetsFetch);

  return <Fragment>
    planets list
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