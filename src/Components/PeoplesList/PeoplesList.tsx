import { FC, Fragment, useContext } from 'react';
import { Planet } from '../../entities';
import LoadingSpin from '../LoadingSpin/LoadingSpin';
import { PeoplesContext } from '../PeoplesProvider';
import styles from './PeoplesList.scss';

interface Props {
  planet: Planet,
}

const PeoplesList: FC<Props> = ({
  planet
}) => {
  const { peoples, isLoading, isError } = useContext(PeoplesContext);

  return <Fragment>
    <h3>Peoples</h3>
    {peoples.filter(
      people => people.homeworld === planet.url
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