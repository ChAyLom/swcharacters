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
      <div>
        <span>Diameter - </span>
        <UnknownCheck value={p.diameter}>
          {s => <span>{`${s} km`}</span>}
        </UnknownCheck>
      </div>

      <div>
        <span>Day length - </span>
        <UnknownCheck value={p.rotation_period}>
          {s => <span>{`${s} hours`}</span>}
        </UnknownCheck>
      </div>

      <div>
        <span>Year length - </span>
        <UnknownCheck value={p.orbital_period}>
          {s => <span>{`${s} days`}</span>}
        </UnknownCheck>
      </div>

      <div>
        <span>Gravity - </span>
        <UnknownCheck value={p.gravity}>
          {s => <span>{`${s.match(/\d+/)?.[0]}G`}</span>}
        </UnknownCheck>
      </div>

      <div>
        <span>Terrain - </span>
        <UnknownCheck value={p.terrain}>
          {s => <span>{s.split(', ').map(v => capitalize(v)).join(', ')}</span>}
        </UnknownCheck>
      </div>

      <div>
        <span>Watered surface - </span>
        <UnknownCheck value={p.surface_water}>
          {s => <span>{`${s}%`}</span>}
        </UnknownCheck>
      </div>

      <div>
        <span>Climate - </span>
        <UnknownCheck value={p.climate}>
          {s => <span>{capitalize(s)}</span>}
        </UnknownCheck>
      </div>

      <div>
        <span>Population - </span>
        <UnknownCheck value={p.population}>
          {s => <span>{/\d+/.test(s) ? pretifyNumber(s) : ''}</span>}
        </UnknownCheck>
      </div>
    </div>
  </div>;
};

export default PlanetBlock;