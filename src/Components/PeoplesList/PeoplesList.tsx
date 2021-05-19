import { FC, Fragment, useState } from 'react';
import { Gender } from '../../enums';
import usePeoplesByIds from '../../libs/hooks/usePeoplesByIds';
import { getIdFromUrl } from '../../libs/utils';
import LoadingSpin from '../LoadingSpin/LoadingSpin';
import GenderSelector from './GenderSelector';
import styles from './PeoplesList.scss';
import appStyles from '../../App.scss';

interface Props {
  peopleIds: string[],
}

const PeoplesList: FC<Props> = ({
  peopleIds
}) => {
  const { peoples, isLoading, isError } = usePeoplesByIds(peopleIds);
  const [genderFilter, setGenderFilter] = useState<Gender>();

  return <Fragment>
    <div className={appStyles.header}>
      Characters
    </div>
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