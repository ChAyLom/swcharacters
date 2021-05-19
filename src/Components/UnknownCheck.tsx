import { FC, Fragment, ReactElement } from 'react';

interface RenderProp<P> {
  (v: P): ReactElement | null | string,
}

interface Props {
  children: RenderProp<string>,
  value: string,
}

const UnknownCheck: FC<Props> = ({
  value,
  children,
}) => {
  if (typeof value !== 'string' || !value || value === null) return null;
  return <Fragment>
    {value.toLowerCase() === 'unknown' ? 'unknown' : children(value)}
  </Fragment>;
};

export default UnknownCheck;