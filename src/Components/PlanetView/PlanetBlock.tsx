import { FC } from 'react';
import { Planet } from '../../entities';
import PlanetInfo from './PlanetInfo';
import styles from './PlanetView.scss';
import appStyles from '../../App.scss';
import { FormattedMessage } from 'react-intl';

interface Props {
  planet: Planet
}

const PlanetBlock: FC<Props> = ({
  planet
}) => {
  return <div className={styles.planet_cont}>
    <div className={appStyles.header}>
      <FormattedMessage
        id="planetName"
        values={{ name: planet.name }}
      />
    </div>
    <div className={styles.planet_info}>
      <PlanetInfo
        planet={planet}
      />
    </div>
  </div>;
};

export default PlanetBlock;