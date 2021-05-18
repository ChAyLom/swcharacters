import { Dispatch, FC, Fragment, SetStateAction } from 'react';
import { Gender } from '../../enums';
import styles from './PeoplesList.scss';

interface Props {
  selected: Gender | undefined,
  setSelected: Dispatch<SetStateAction<Gender | undefined>>,
}

const GenderSelector: FC<Props> = ({
  selected,
  setSelected,
}) => {
  return <Fragment>
    <ul>
      {Object.values(Gender).map(gender => <li
        key={gender}
        onClick={() => setSelected(
          current => current === gender ? undefined : gender
        )}
        style={{color: selected === gender ? 'red' : undefined}}
      >
        {gender}
      </li>)}
    </ul>
  </Fragment>;
};

export default GenderSelector;