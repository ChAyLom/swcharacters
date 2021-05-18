import { FC, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Planet } from '../../entities';
import { getIdFromUrl } from '../../libs/utils';
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
        {planet.name}
      </div>
    </Link>
  </Fragment>;
};

export default PlanetCard;