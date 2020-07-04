import React, { ComponentProps } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './Form.module.scss';

export type CheckBoxProps = {
  label: string;
  className?: string;
} & ComponentProps<'input'>

export const CheckBox: React.FC<CheckBoxProps> = props => {

  const {
    label,
    className,
    ...rest
  } = props;

  return (
    <label className={classNames.bind(styles)('form-checkbox', className)}>
      <input type="checkbox" {...rest} />
      <i className={classNames.bind(styles)('form-icon')} /> {label}
    </label>
  );
}

CheckBox.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string
};
