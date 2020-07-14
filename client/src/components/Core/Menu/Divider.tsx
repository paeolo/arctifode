import React from 'react';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

export const MenuDivider = () => {

  return (
    <li className={classNames.bind(styles)('divider')} />
  );
}
