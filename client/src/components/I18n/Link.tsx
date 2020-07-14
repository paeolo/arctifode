import React from 'react';
import NextLink, { LinkProps } from 'next/link';

import { useTranslate } from '../../hooks';

export const Link: React.FC<LinkProps> = props => {

  const { locale } = useTranslate();
  const { as, children, href, ...options } = props;

  if (href.toString().startsWith('/')) {
    return (
      <NextLink
        href={'/[lang]'.concat(href.toString())}
        as={'/'.concat(locale.concat((as || href).toString()))}
        children={children}
        {...options}
      />
    );
  }

  return (
    <NextLink
      href={href}
      as={as}
      children={children}
      {...options}
    />
  );
}
