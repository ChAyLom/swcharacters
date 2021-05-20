import { FC, Fragment } from 'react';
import { Planet } from '../../entities';
import { capitalize, pretifyNumber } from '../../libs/utils';
import InfoRow from './InfoRow';

interface Props {
  planet: Planet,
}

const terrainFormat = (v: string) => v.split(', ').map(capitalize).join(', ');

const PlanetInfo: FC<Props> = ({
  planet,
}) => {
  return <Fragment>
    <InfoRow
      value={planet.diameter}
      nameId="diameter"
      valueId="distanceKm"
    />
    <InfoRow
      value={planet.rotation_period}
      nameId="dayLen"
      valueId="timeHours"
    />
    <InfoRow
      value={planet.orbital_period}
      nameId="yearLen"
      valueId="timeDays"
    />
    <InfoRow
      value={planet.gravity}
      nameId="gravity"
      valueId={/^(\d+.|)\d+$/.test(planet.gravity) ? 'gravityG' : undefined}
    />
    <InfoRow
      value={planet.terrain}
      nameId="terrain"
      valueFormat={terrainFormat}
    />
    <InfoRow
      value={planet.surface_water}
      nameId="surfaceWater"
      valueId="percentView"
    />
    <InfoRow
      value={planet.climate}
      nameId="climate"
      valueFormat={capitalize}
    />
    <InfoRow
      value={planet.population}
      nameId="population"
      valueFormat={pretifyNumber}
    />
  </Fragment>;
};

export default PlanetInfo;