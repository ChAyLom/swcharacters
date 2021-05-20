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
    {(
      ['unknown', 'n/a'].includes(value.toLowerCase())
    ) ? value : children(value)}
  </Fragment>;
};

export default UnknownCheck;