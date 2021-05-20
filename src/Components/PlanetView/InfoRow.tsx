import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import UnknownCheck from '../UnknownCheck';

interface ValueView {
  (v: string): string,
}

interface Props {
  value: string,
  nameId: string,
  valueId?: string,
  valueFormat?: ValueView,
}

const InfoRow: FC<Props> = ({
  value,
  nameId,
  valueId,
  valueFormat,
}) => {
  const formattedValue = valueFormat ? valueFormat(value) : value;

  return <div>
    <span><FormattedMessage
      id={nameId}
    /> - </span>
    <UnknownCheck value={value}>
      <span>
        {valueId ? <FormattedMessage
          id={valueId}
          values={{ value: formattedValue }}
        /> : formattedValue}
      </span>
    </UnknownCheck>
  </div>;
};

export default InfoRow;