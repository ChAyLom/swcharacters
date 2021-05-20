import { FC, Fragment, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { planetFetcher } from '../../libs/fetches';
import { getIdFromUrl } from '../../libs/utils';
import { Planet } from '../../entities';
import HttpError from '../../libs/fetches/HttpError';
import LoadingSpin from '../LoadingSpin/LoadingSpin';
import PeoplesList from '../PeoplesList/PeoplesList';
import PlanetBlock from './PlanetBlock';
import NotFound from './NotFound';
import UnknownError from '../UnknownError';

interface Params {
  planetId: string
}

const PlanetView: FC = () => {
  const { planetId } = useParams<Params>();
  const {
    data: planet,
    isFetched,
    isLoading,
    isError,
    error,
  } = useQuery<Planet, HttpError>(
    ['planet', planetId],
    () => planetFetcher(planetId)
  );

  useEffect(() => {
    if (planet?.name) document.title = `Star Wars: ${planet.name}`;
  }, [planet?.name]);

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
    {isError && (
      (error?.response.status === 404) ? (
        <NotFound />
      ) : (
        <UnknownError />
      )
    )}
  </Fragment>;
};

export default PlanetView;