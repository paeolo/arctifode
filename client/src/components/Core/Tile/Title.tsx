import React from 'react';
import classNames from 'classnames/bind';
import styles from './Tile.module.scss';

export const Title: React.FC = props => {

  return (
    <div className={classNames.bind(styles)('tile-title', 'h5')}>
      {props.children}
    </div>
  );
}
