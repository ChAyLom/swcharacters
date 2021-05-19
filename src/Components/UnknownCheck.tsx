import { FC, Fragment } from 'react';

interface Formater {
  (str: string): string,
}

interface Props {
  formatter: Formater,
}

const UnknownCheck: FC<Props> = ({
  formatter,
  children: value,
}) => {
  if (typeof value !== 'string' || !value || value === null) return null;
  return <Fragment>
    {value.toLowerCase() === 'unknown' ? 'unknown' : formatter(value)}
  </Fragment>;
};

export default UnknownCheck;