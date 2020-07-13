import React from 'react';
import classNames from 'classnames/bind';
import styles from './Empty.module.scss';

export const Action: React.FC = props => {

  return (
    <div className={classNames.bind(styles)('empty-action')}>
      {props.children}
    </div>
  );
}
