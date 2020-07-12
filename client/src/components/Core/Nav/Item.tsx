import React from 'react';

import classNames from 'classnames/bind';
import styles from './Nav.module.scss';

type NavItemProps = {
  active?: boolean;
}

export const NavItem: React.FC<NavItemProps> = props => {

  return (
    <li
      className={classNames.bind(styles)(
        'nav-item',
        {
          'active': props.active
        }
      )}>
      {props.children}
    </li>
  );
}
