import { FC } from 'react';
import { People } from '../../entities';
import UnknownCheck from '../UnknownCheck';
import styles from './PeopleCard.scss';

interface Props {
  people: People,
}

const PeopleCard: FC<Props> = ({
  people,
}) => {
  return <div className={styles.cont}>
    <div className={styles.card}>
      <div className={styles.name}>{people.name}</div>
      <div className={styles.info}>
        <div>Birth year - {people.birth_year}</div>
        <div>Gender - {people.gender}</div>
        <div>Height - <UnknownCheck value={people.height}>
          {v => `${v} cm`}
        </UnknownCheck></div>
        <div>Mass - <UnknownCheck value={people.mass}>
          {v => `${v} kg`}
        </UnknownCheck></div>
        <div>Skin color - {people.skin_color}</div>
        <div>Eye color - {people.eye_color}</div>
        <div>Hair color - {people.hair_color}</div>
      </div>
    </div>
  </div>;
};

export default PeopleCard;