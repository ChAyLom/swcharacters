import { FC, Fragment, useContext, useState } from 'react';
import { Planet } from '../../entities';
import { Gender } from '../../enums';
import LoadingSpin from '../LoadingSpin/LoadingSpin';
import { PeoplesContext } from '../PeoplesProvider';
import GenderSelector from './GenderSelector';
import styles from './PeoplesList.scss';

interface Props {
  planet: Planet,
}

const PeoplesList: FC<Props> = ({
  planet
}) => {
  const { peoples, isLoading, isError } = useContext(PeoplesContext);
  const [genderFilter, setGenderFilter] = useState<Gender>();

  return <Fragment>
    <h3>Peoples</h3>
    <GenderSelector
      selected={genderFilter}
      setSelected={setGenderFilter}
    />
    {peoples.filter(
      people => planet.residents.includes(people.url)
    ).filter(
      people => people.gender === genderFilter || !genderFilter
    ).map(people => <div
      key={people.url}
    >
      {people.name}
    </div>)}
    {isLoading && <LoadingSpin />}
    {isError && <div>peoples fetching error</div>}
  </Fragment>;
};

export default PeoplesList;