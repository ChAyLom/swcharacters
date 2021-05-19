import { FC } from 'react';
import { Planet } from '../../entities';
import PlanetInfo from './PlanetInfo';
import styles from './PlanetView.scss';
import appStyles from '../../App.scss';

interface Props {
  planet: Planet
}

const PlanetBlock: FC<Props> = ({
  planet
}) => {
  return <div className={styles.planet_cont}>
    <div className={appStyles.header}>
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