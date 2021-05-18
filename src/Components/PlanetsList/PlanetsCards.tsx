import { FC, Fragment } from 'react';
import { Planet } from '../../entities';
import PlanetCard from '../PlanetCard/PlanetCard';
import styles from './PlanetsList.scss';

interface Props {
  planets: Planet[],
}

const PlanetsCards: FC<Props> = ({
  planets
}) => {
  return <Fragment>
    {planets.map(
      planet => <PlanetCard
        key={planet.url}
        planet={planet}
      />
    )}
  </Fragment>;
};

export default PlanetsCards;