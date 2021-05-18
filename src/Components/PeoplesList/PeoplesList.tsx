import { FC, Fragment, useContext, useState } from 'react';
import { Gender } from '../../enums';
import { getIdFromUrl } from '../../libs/utils';
import LoadingSpin from '../LoadingSpin/LoadingSpin';
import { PeoplesContext } from '../PeoplesProvider';
import GenderSelector from './GenderSelector';
import styles from './PeoplesList.scss';

interface Props {
  peopleIds: string[],
}

const PeoplesList: FC<Props> = ({
  peopleIds
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
      people => peopleIds.includes(getIdFromUrl(people.url))
    ).filter(
      people => people.gender === genderFilter || !genderFilter
    ).sort(
      (a, b) => a.name.localeCompare(b.name)
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