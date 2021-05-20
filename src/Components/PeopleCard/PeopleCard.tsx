import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
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
        <div><FormattedMessage id="birthYear"/> - {people.birth_year}</div>
        <div><FormattedMessage id="gender"/> - {people.gender}</div>
        <div>
          <FormattedMessage id="height"/> - <UnknownCheck value={people.height}>
            {value => <FormattedMessage
              id="distanceCm"
              values={{ value }}
            />}
          </UnknownCheck>
        </div>
        <div>
          <FormattedMessage id="mass"/> - <UnknownCheck value={people.mass}>
            {value => <FormattedMessage
              id="massKg"
              values={{ value }}
            />}
          </UnknownCheck>
        </div>
        <div><FormattedMessage id="skinColor"/> - {people.skin_color}</div>
        <div><FormattedMessage id="eyeColor"/> - {people.eye_color}</div>
        <div><FormattedMessage id="hairColor"/> - {people.hair_color}</div>
      </div>
    </div>
  </div>;
};

export default PeopleCard;