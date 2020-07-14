import React from 'react';
import classNames from 'classnames/bind';
import styles from './Typography.module.scss';

export type LabelProps = {
  label: string;
};

export const Label = (props: LabelProps) => {
  return (
    <small className={classNames.bind(styles)('label')}>
      {props.label}
    </small>
  )
}
