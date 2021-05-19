import { FC } from 'react';
import { Planet } from '../../entities';
import PlanetInfo from './PlanetInfo';
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
      <PlanetInfo
        planet={planet}
      />
    </div>
  </div>;
};

export default PlanetBlock;