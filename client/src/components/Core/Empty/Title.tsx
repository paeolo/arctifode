import React from 'react';
import classNames from 'classnames/bind';
import styles from './Empty.module.scss';

export const Title: React.FC = props => {

  return (
    <p className={classNames.bind(styles)('empty-title', 'h5')}>
      {props.children}
    </p>
  );
}
