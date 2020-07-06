import React from 'react';

import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

export type BrandProps = {
  center?: boolean;
  href?: string;
};

export const Brand: React.FC<BrandProps> = props => {

  return (
    <a
      href={props.href || '#'}
      className={classNames.bind(styles)('navbar-brand')}>
      {props.children}
    </a>
  );
}
