import React from 'react';
import Polyglot from 'node-polyglot';
import TimeAgo from 'javascript-time-ago';

import en from 'javascript-time-ago/locale/en';
import fr from 'javascript-time-ago/locale/fr';

import { defaultLocale } from '../../locales';

export const I18nContext = React.createContext(
  {
    polyglot: new Polyglot({
      locale: defaultLocale,
      phrases: {}
    }),
    timeAgo: undefined
  }
);

export type I18nProviderProps = {
  locale: string;
  polyglot: {
    phrases: any
  },
};

export const I18nProvider: React.FC<I18nProviderProps> = props => {

  const polyglot = new Polyglot({
    locale: props.locale || defaultLocale,
    phrases: props.polyglot.phrases || {},
  });

  TimeAgo.addLocale(props.locale === "fr"
    ? fr
    : en
  );
  const timeAgo = new TimeAgo(props.locale);

  return (
    <I18nContext.Provider value={{ polyglot: polyglot, timeAgo: timeAgo }}>
      {React.Children.only(props.children)}
    </I18nContext.Provider>
  );
}
