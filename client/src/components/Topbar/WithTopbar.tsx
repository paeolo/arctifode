import React from 'react';
import classNames from 'classnames/bind';
import styles from './Topbar.module.scss';

import { Topbar } from './Topbar';

export const WithTopbar: React.FC = props => {
  return (
    <div className={classNames.bind(styles)('container')}>
      <Topbar />
      <div className={classNames.bind(styles)('content')}>
        {props.children}
      </div>
    </div>
  );
}
