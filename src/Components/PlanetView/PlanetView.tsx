import { FC, Fragment } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { planetFetcher } from '../../libs/fetchers';
import styles from './PlanetView.scss';

interface Params {
  planetId: string
}

const PlanetView: FC = () => {
  const { planetId } = useParams<Params>();
  const { data, isFetched, isLoading } = useQuery(
    ['planet', planetId],
    () => planetFetcher(planetId)
  );
  
  return <Fragment>
    planet view
    {isFetched && <div>{data?.name}</div>}
    {isLoading && <div>loading</div>}
  </Fragment>;
};

export default PlanetView;