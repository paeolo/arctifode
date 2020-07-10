import React from 'react';
import classNames from 'classnames/bind';
import styles from './Index.module.scss';

import { ListItem } from './ListItem';

export const List = () => {

  return (
    <div className={classNames.bind(styles)('list')}>
      <ListItem />
      <ListItem />
      <ListItem />
    </div>
  );
}
