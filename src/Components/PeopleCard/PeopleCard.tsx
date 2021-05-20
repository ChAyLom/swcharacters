import { FC } from 'react';
import { People } from '../../entities';
import InfoRow from '../InfoRow';
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
        <InfoRow
          value={people.birth_year}
          nameId="birthYear"
        />
        <InfoRow
          value={people.gender}
          nameId="gender"
        />
        <InfoRow
          value={people.height}
          nameId="height"
          valueId="distanceCm"
        />
        <InfoRow
          value={people.mass}
          nameId="mass"
          valueId="massKg"
        />
        <InfoRow
          value={people.skin_color}
          nameId="skinColor"
        />
        <InfoRow
          value={people.eye_color}
          nameId="eyeColor"
        />
        <InfoRow
          value={people.hair_color}
          nameId="hairColor"
        />
      </div>
    </div>
  </div>;
};

export default PeopleCard;