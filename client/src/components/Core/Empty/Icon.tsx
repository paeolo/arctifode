import React from 'react';
import classNames from 'classnames/bind';
import styles from './Empty.module.scss';

export const Icon: React.FC = props => {

  return (
    <div className={classNames.bind(styles)('empty-icon')}>
      {props.children}
    </div>
  );
}
