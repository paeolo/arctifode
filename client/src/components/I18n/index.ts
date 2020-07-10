import { locales } from '../../locales';
import { LocaleProps } from './WithLocale';

export * from './WithLocale';
export * from './Link';
export * from './SwitchLanguage';
export * from './types';

export type Locale = typeof locales[number]

export async function getLocaleProps(locale: string): Promise<LocaleProps> {

  if (!locales.includes(locale)) {
    return {
      locale: null,
      polyglot: null,
      timeAgo: null
    }
  }

  const polyglotPhrases = await import(`../../locales/${locale}.json`)
    .then(m => m.default);
  const timeAgoPhrases = await import(`../../locales/timeago/${locale}.json`)
    .then(m => m.default);

  return {
    locale: locale,
    polyglot: { phrases: polyglotPhrases },
    timeAgo: { phrases: timeAgoPhrases }
  }
}

export async function getLocalePaths() {
  return {
    paths: locales.map(value => ({ params: { lang: value } })),
    fallback: false,
  }
}
