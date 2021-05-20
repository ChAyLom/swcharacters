import { FC, Fragment, useState } from 'react';
import { Gender } from '../../enums';
import usePeoplesByIds from '../../libs/hooks/usePeoplesByIds';
import { capitalize } from '../../libs/utils';
import LoadingSpin from '../LoadingSpin/LoadingSpin';
import GenderSelector from './GenderSelector';
import appStyles from '../../App.scss';
import PeopleCard from '../PeopleCard/PeopleCard';
import RequestError from '../RequestError';
import styles from './PeoplesList.scss';

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
    <div className={styles.list_cont}>
      {filteredPeoples.sort(
        (a, b) => a.name.localeCompare(b.name)
      ).map(people => <PeopleCard
        key={people.url}
        people={people}
      />)}
    </div>

    {(
      isFetched &&
      genderFilter &&
      filteredPeoples.length === 0 &&
      peoples.length !== 0
    ) && <div className={styles.no_peoples}>
      This planet has no characters with "{capitalize(genderFilter)}" gender
    </div>}

    {(
      isFetched &&
      peoples.length === 0
    ) && <div className={styles.no_peoples}>
      This planet has no characters
    </div>}

    {isLoading && <LoadingSpin />}
    {isError && <RequestError />}
  </Fragment>;
};

export default PeoplesList;