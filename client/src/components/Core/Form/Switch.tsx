import React, { ComponentProps } from 'react';

import classNames from 'classnames/bind';
import styles from './Form.module.scss';

export type SwitchProps = {
  label: string;
} & Omit<ComponentProps<'input'>, 'className'>

export const Switch: React.FC<SwitchProps> = props => {

  const {
    label,
    ...rest
  } = props;

  return (
    <label className={classNames.bind(styles)('form-switch')}>
      <input type="checkbox" {...rest} />
      <i className={classNames.bind(styles)('form-icon')} /> {label}
    </label>
  );
}
