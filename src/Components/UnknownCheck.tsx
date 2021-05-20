import { FC, Fragment, ReactElement } from 'react';

interface RenderProp<P> {
  (v: P): ReactElement | null | string,
}

interface Props {
  children: RenderProp<string> | ReactElement,
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
    ) ? value : (
      typeof children === 'function' ? children(value) : children
    )}
  </Fragment>;
};

export default UnknownCheck;