import React from 'react';
import classNames from 'classnames/bind';
import styles from './Tile.module.scss';

export const Action: React.FC = props => {

  return (
    <div className={classNames.bind(styles)('tile-action')}>
      {props.children}
    </div>
  );
}
