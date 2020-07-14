import React from 'react';

import classNames from 'classnames/bind';
import styles from './Nav.module.scss';

import { NavItem } from './Item';

export const NavFC: React.FC = props => {

  return (
    <ul className={classNames.bind(styles)('nav')}>
      {props.children}
    </ul>
  );
}

export const Nav = Object.assign(
  NavFC,
  {
    displayName: 'Nav',
    Item: NavItem,
  }
);
