import React from 'react';
import ms from 'ms';
import { useRouter } from 'next/router'

import { cookieName } from '../../locales';
import { useTranslate } from '../../hooks';

interface SwitchLanguageProps {
  locale: string;
  className?: string;
  children: JSX.Element;
}

export const SwitchLanguage: React.FC<SwitchLanguageProps> = props => {

  const router = useRouter();
  const { locale } = useTranslate();

  const handleClick = async () => {
    var expires = new Date(Date.now() + ms('1 year')).toUTCString();
    document.cookie = `${cookieName}=${props.locale};expires=${expires};path=/`;
  }

  if (props.locale === locale) {
    return props.children;
  }

  return React.cloneElement(
    props.children,
    {
      href: router.asPath.replace(locale, props.locale),
      onClick: handleClick
    })
}
