import { FC, Fragment } from 'react';
import { Planet } from '../../entities';
import styles from './PlanetView.scss';

interface Props {
  planet: Planet
}

const PlanetView: FC<Props> = ({
  planet,
}) => {
  return <Fragment>
    planet view {planet.name}
  </Fragment>;
};

export default PlanetView;