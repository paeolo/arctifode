import React from 'react';
import classNames from 'classnames/bind';
import styles from './Tile.module.scss';

export const Subtitle: React.FC = props => {

  return (
    <small className={classNames.bind(styles)('tile-subtitle', 'text-gray')}>
      {props.children}
    </small>
  );
}
