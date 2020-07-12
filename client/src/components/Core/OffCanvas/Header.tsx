import React from 'react';
import classNames from 'classnames/bind';
import styles from './OffCanvas.module.scss';
import { Divider } from '../../Layout';

export const Header: React.FC = props => {
  return (
    <div className={classNames.bind(styles)(
      'off-canvas-header'
    )}>
      {props.children}
    </div>
  );
}
