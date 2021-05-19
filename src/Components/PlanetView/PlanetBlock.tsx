import { FC, Fragment } from 'react';
import { Planet } from '../../entities';
import styles from './PlanetView.scss';

interface Props {
  planet: Planet
}

const PlanetBlock: FC<Props> = ({
  planet
}) => {
  return <div className={styles.planet_cont}>
    <div className={styles.header}>
      Planet {planet.name}
    </div>
    <div className={styles.planet_info}>
      <div>Diameter - {planet.diameter} km</div>
      <div>Day length - {planet.rotation_period} hours</div>
      <div>Year length - {planet.orbital_period} days</div>
      <div>Gravity - {planet.gravity.match(/\d+/)?.[0]}G</div>
      <div>Terrain - {planet.terrain.split(';').join(', ')}</div>
      <div>Watered surface - {planet.surface_water}%</div>
      <div>Climate - {planet.climate}</div>
      <div>Population - {planet.population}</div>
      <div>Films amount - {planet.films.length}</div>
    </div>
  </div>;
};

export default PlanetBlock;