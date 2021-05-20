import { FC, Fragment, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { allPlanetsFetch } from '../../libs/fetches';
import LoadingSpin from '../LoadingSpin/LoadingSpin';
import PlanetsCards from './PlanetsCards';
import styles from './PlanetsList.scss';
import appStyles from '../../App.scss';
import { FormattedMessage } from 'react-intl';
import RequestError from '../RequestError';

const PlanetsList: FC = () => {
  const {
    data: planets,
    isFetched,
    isLoading,
    isError,
  } = useQuery('planets', allPlanetsFetch);

  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    document.title = 'Star Wars: Planets';
  }, []);

  return <Fragment>
    <div className={appStyles.header}>
      <FormattedMessage id="planets"/>
    </div>
    <div className={styles.filters}>
      <div></div>
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search"
      />
    </div>
    {(isFetched && planets) && <PlanetsCards
      planets={planets.filter(
        planet => !search || planet.name.toLowerCase().includes(search.toLowerCase())
      )}
    />}
    {isLoading && <LoadingSpin />}
    {isError && <RequestError />}
  </Fragment>;
};

export default PlanetsList;