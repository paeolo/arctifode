import React from 'react';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

export const MenuItem: React.FC = props => {

  return (
    <li
      className={classNames.bind(styles)('menu-item')}>
      {props.children}
    </li>
  );
}
