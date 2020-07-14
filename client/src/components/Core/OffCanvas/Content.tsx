import React from 'react';
import classNames from 'classnames/bind';
import styles from './OffCanvas.module.scss';

export const Content: React.FC = props => {
  return (
    <div
      className={classNames.bind(styles)('off-canvas-content')}>
      {props.children}
    </div>
  );
}
