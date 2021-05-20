import { Dispatch, FC, Fragment, SetStateAction } from 'react';
import cln from 'classnames';
import { Gender, IntlGenderIds } from '../../enums';
import styles from './PeoplesList.scss';
import { FormattedMessage } from 'react-intl';

interface Props {
  selected: Gender | undefined,
  setSelected: Dispatch<SetStateAction<Gender | undefined>>,
}

const GenderSelector: FC<Props> = ({
  selected,
  setSelected,
}) => {
  const click = (gender: Gender) => setSelected(
    current => current === gender ? undefined : gender
  );

  return <Fragment>
    <div className={styles.gender_selector_cont}>
      {Object.values(Gender).map(
        gender => <div
          key={gender}
          tabIndex={0}
          className={styles.gender}
          onClick={() => click(gender)}
          onKeyPress={e => ['Space', 'Enter'].includes(e.code) && click(gender)}
        >
          <div
            className={cln(
              styles.checkbox,
              gender === selected && styles.checkbox_checked,
            )}
          />
          <div className={styles.gender_name}>
            <FormattedMessage id={IntlGenderIds[gender]}/>
          </div>
        </div>
      )}
    </div>
  </Fragment>;
};

export default GenderSelector;