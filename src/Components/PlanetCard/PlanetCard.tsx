import { FC, Fragment } from 'react';
import { Planet } from '../../entities';
import styles from './PlanetCard.scss';

interface Props {
  planet: Planet
}

const PlanetCard: FC<Props> = ({
  planet,
}) => {
  return <Fragment>
    planet card {planet.name}
  </Fragment>;
};

export default PlanetCard;