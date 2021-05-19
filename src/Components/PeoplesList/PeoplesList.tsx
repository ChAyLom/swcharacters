import { FC, Fragment, useState } from 'react';
import { Gender } from '../../enums';
import usePeoplesByIds from '../../libs/hooks/usePeoplesByIds';
import { capitalize } from '../../libs/utils';
import LoadingSpin from '../LoadingSpin/LoadingSpin';
import GenderSelector from './GenderSelector';
import appStyles from '../../App.scss';

interface Props {
  peopleIds: string[],
}

const PeoplesList: FC<Props> = ({
  peopleIds
}) => {
  const { peoples, isLoading, isError, isFetched } = usePeoplesByIds(peopleIds);
  const [genderFilter, setGenderFilter] = useState<Gender>();

  const filteredPeoples = peoples.filter(
    people => people.gender === genderFilter || !genderFilter
  );

  return <Fragment>
    <div className={appStyles.header}>
      Characters
    </div>
    <GenderSelector
      selected={genderFilter}
      setSelected={setGenderFilter}
    />
    {filteredPeoples.sort(
      (a, b) => a.name.localeCompare(b.name)
    ).map(people => <div
      key={people.url}
    >
      {people.name}
    </div>)}

    {(
      isFetched &&
      genderFilter &&
      filteredPeoples.length === 0 &&
      peoples.length !== 0
    ) && <div>
      This planet has no characters with "{capitalize(genderFilter)}" gender
    </div>}

    {(
      isFetched &&
      peoples.length === 0
    ) && <div>
      This planet has no characters
    </div>}

    {isLoading && <LoadingSpin />}
    {isError && <div>peoples fetching error</div>}
  </Fragment>;
};

export default PeoplesList;