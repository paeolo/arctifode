import React, { ComponentProps } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './Form.module.scss';

export type CheckBoxProps = {
  label: string;
} & Omit<ComponentProps<'input'>, 'className'>

export const CheckBox: React.FC<CheckBoxProps> = props => {

  const {
    label,
    ...rest
  } = props;

  return (
    <label className={classNames.bind(styles)('form-checkbox')}>
      <input type="checkbox" {...rest} />
      <i className={classNames.bind(styles)('form-icon')} /> {label}
    </label>
  );
}

CheckBox.propTypes = {
  label: PropTypes.string
};
