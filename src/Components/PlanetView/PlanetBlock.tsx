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
      <div>Diameter - <UnknownCheck
        formatter={s => `${s} km`}
      >{p.diameter}</UnknownCheck></div>

      <div>Day length - <UnknownCheck
        formatter={s => `${s} hours`}
      >{p.rotation_period}</UnknownCheck></div>

      <div>Year length - <UnknownCheck
        formatter={s => `${s} days`}
      >{p.orbital_period}</UnknownCheck></div>

      <div>Gravity - <UnknownCheck
        formatter={s => `${s.match(/\d+/)?.[0]}G`}
      >{p.gravity}</UnknownCheck></div>

      <div>Terrain - <UnknownCheck
        formatter={s => s.split(', ').map(v => capitalize(v)).join(', ')}
      >{p.terrain}</UnknownCheck></div>

      <div>Watered surface - <UnknownCheck
        formatter={s => `${s}%`}
      >{p.surface_water}</UnknownCheck></div>

      <div>Climate - <UnknownCheck
        formatter={s => capitalize(s)}
      >{p.climate}</UnknownCheck></div>

      <div>Population - <UnknownCheck
        formatter={s => /\d+/.test(s) ? pretifyNumber(s) : ''}
      >{p.population}</UnknownCheck></div>
    </div>
  </div>;
};

export default PlanetBlock;