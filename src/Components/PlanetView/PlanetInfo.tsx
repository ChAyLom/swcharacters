import { FC, Fragment } from 'react';
import { Planet } from '../../entities';
import { capitalize, pretifyNumber } from '../../libs/utils';
import UnknownCheck from '../UnknownCheck';
import styles from './PlanetView.scss';

interface Props {
  planet: Planet,
}

const PlanetInfo: FC<Props> = ({
  planet,
}) => {
  return <Fragment>
    <div>
      <span>Diameter - </span>
      <UnknownCheck value={planet.diameter}>
        {s => <span>{`${s} km`}</span>}
      </UnknownCheck>
    </div>

    <div>
      <span>Day length - </span>
      <UnknownCheck value={planet.rotation_period}>
        {s => <span>{`${s} hours`}</span>}
      </UnknownCheck>
    </div>

    <div>
      <span>Year length - </span>
      <UnknownCheck value={planet.orbital_period}>
        {s => <span>{`${s} days`}</span>}
      </UnknownCheck>
    </div>

    <div>
      <span>Gravity - </span>
      <UnknownCheck value={planet.gravity}>
        {s => <span>{`${s.match(/\d+/)?.[0]}G`}</span>}
      </UnknownCheck>
    </div>

    <div>
      <span>Terrain - </span>
      <UnknownCheck value={planet.terrain}>
        {s => <span>{s.split(', ').map(v => capitalize(v)).join(', ')}</span>}
      </UnknownCheck>
    </div>

    <div>
      <span>Watered surface - </span>
      <UnknownCheck value={planet.surface_water}>
        {s => <span>{`${s}%`}</span>}
      </UnknownCheck>
    </div>

    <div>
      <span>Climate - </span>
      <UnknownCheck value={planet.climate}>
        {s => <span>{capitalize(s)}</span>}
      </UnknownCheck>
    </div>

    <div>
      <span>Population - </span>
      <UnknownCheck value={planet.population}>
        {s => <span>{/\d+/.test(s) ? pretifyNumber(s) : ''}</span>}
      </UnknownCheck>
    </div>
  </Fragment>;
};

export default PlanetInfo;