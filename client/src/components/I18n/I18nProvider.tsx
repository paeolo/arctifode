import React from 'react';
import Polyglot from 'node-polyglot';
import { format, register } from 'timeago.js';

import { defaultLocale } from '../../locales';
import { getTimeAgoLocale, initYup } from './utils';

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
  timeAgo: {
    phrases: any
  }
};

export const I18nProvider: React.FC<I18nProviderProps> = props => {

  const polyglot = new Polyglot({
    locale: props.locale || defaultLocale,
    phrases: props.polyglot.phrases || {},
  });

  initYup();

  register(props.locale, getTimeAgoLocale(
    props.timeAgo.phrases.ago,
    props.timeAgo.phrases.in
  ));

  const timeAgo = (date: Date) => format(date, props.locale);

  return (
    <I18nContext.Provider value={{ polyglot: polyglot, timeAgo: timeAgo }}>
      {React.Children.only(props.children)}
    </I18nContext.Provider>
  );
}
