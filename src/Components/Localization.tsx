import { FC } from 'react';
import { IntlProvider } from 'react-intl';
import enLocale from '../../assets/localization/en.json';

const Localization: FC = ({
  children,
}) => {
  return <IntlProvider
    locale="en"
    messages={enLocale}
  >
    {children}
  </IntlProvider>;
};

export default Localization;