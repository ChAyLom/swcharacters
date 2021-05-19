import { FC } from 'react';
import { Planet } from '../../entities';
import { capitalize, pretifyNumber } from '../../libs/utils';
import styles from './PlanetView.scss';
import UnknownCheck from '../UnknownCheck';

interface Props {
  planet: Planet
}

const PlanetBlock: FC<Props> = ({
  planet: p
}) => {
  return <div className={styles.planet_cont}>
    <div className={styles.header}>
      Planet {p.name}
    </div>
    <div className={styles.planet_info}>
      <div>Diameter - <UnknownCheck value={p.diameter}>
        {s => `${s} km`}
      </UnknownCheck></div>

      <div>Day length - <UnknownCheck value={p.rotation_period}>
        {s => `${s} hours`}
      </UnknownCheck></div>

      <div>Year length - <UnknownCheck value={p.orbital_period}>
        {s => `${s} days`}
      </UnknownCheck></div>

      <div>Gravity - <UnknownCheck value={p.gravity}>
        {s => `${s.match(/\d+/)?.[0]}G`}
      </UnknownCheck></div>

      <div>Terrain - <UnknownCheck value={p.terrain}>
        {s => s.split(', ').map(v => capitalize(v)).join(', ')}
      </UnknownCheck></div>

      <div>Watered surface - <UnknownCheck value={p.surface_water}>
        {s => `${s}%`}
      </UnknownCheck></div>

      <div>Climate - <UnknownCheck value={p.climate}>
        {s => capitalize(s)}
      </UnknownCheck></div>

      <div>Population - <UnknownCheck value={p.population}>
        {s => /\d+/.test(s) ? pretifyNumber(s) : ''}
      </UnknownCheck></div>
    </div>
  </div>;
};

export default PlanetBlock;