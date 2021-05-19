import { FC, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Planet } from '../../entities';
import { getIdFromUrl } from '../../libs/utils';
import PlanetInfo from '../PlanetView/PlanetInfo';
import styles from './PlanetCard.scss';

interface Props {
  planet: Planet
}

const PlanetCard: FC<Props> = ({
  planet,
}) => {
  return <Fragment>
    <Link
      to={`/planet/${getIdFromUrl(planet.url)}`}
      className={styles.link_cont}
      tabIndex={0}
    >
      <div className={styles.cont}>
        <div className={styles.header}>
          {planet.name}
        </div>
        <div className={styles.info}>
          <PlanetInfo
            planet={planet}
          />
        </div>
      </div>
    </Link>
  </Fragment>;
};

export default PlanetCard;