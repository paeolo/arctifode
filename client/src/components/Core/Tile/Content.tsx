import React from 'react';
import classNames from 'classnames/bind';
import styles from './Tile.module.scss';

export const Content: React.FC = props => {

  return (
    <div className={classNames.bind(styles)('tile-content')}>
      {props.children}
    </div>
  );
}
