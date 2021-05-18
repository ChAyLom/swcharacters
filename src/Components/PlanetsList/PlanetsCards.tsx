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
    <div className={styles.cont}>
      {planets.sort(
        (a, b) => a.name.localeCompare(b.name)
      ).map(
        planet => <PlanetCard
          key={planet.url}
          planet={planet}
        />
      )}
    </div>
  </Fragment>;
};

export default PlanetsCards;