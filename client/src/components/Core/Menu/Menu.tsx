import React from 'react';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import { MenuDivider } from './Divider';
import { MenuDropdown } from './Dropdown';
import { MenuItem } from './Item';

export const MenuFC: React.FC = props => {

  return (
    <ul className={classNames.bind(styles)('menu')}>
      {props.children}
    </ul>
  );
}

export const Menu = Object.assign(
  MenuFC,
  {
    displayName: 'Menu',
    Divider: MenuDivider,
    Dropdown: MenuDropdown,
    Item: MenuItem,
  }
);
