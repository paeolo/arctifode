import React, { useContext } from 'react';
import { NextPage } from 'next';
import Error from 'next/error';

import { InversifyContext, ApplicationBindings } from '../../container';
import { I18nProvider, I18nProviderProps } from './I18nProvider';

export type LocaleProps = Partial<I18nProviderProps>;

export const WithLocale = (WrappedPage: NextPage<any>): NextPage<LocaleProps> => props => {

  const { locale, polyglot, timeAgo, ...pageProps } = props;
  const container = useContext(InversifyContext);

  if (!locale) {
    return <Error statusCode={404} />
  }

  if (!container.isBound(ApplicationBindings.LOCALE))
    container.bind(ApplicationBindings.LOCALE).toConstantValue(locale);

  return (
    <I18nProvider
      locale={locale}
      polyglot={polyglot}
      timeAgo={timeAgo}>
      <WrappedPage {...pageProps} />
    </I18nProvider >
  );
}
