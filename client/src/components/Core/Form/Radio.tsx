import React, { ComponentProps } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './Form.module.scss';

export type RadioProps = {
  label: string;
  className?: string;
} & ComponentProps<'input'>

export const Radio: React.FC<RadioProps> = props => {

  const {
    label,
    className,
    ...rest
  } = props;

  return (
    <label className={classNames.bind(styles)('form-radio', className)}>
      <input type="radio" {...rest} />
      <i className={classNames.bind(styles)('form-icon')} /> {label}
    </label>
  );
}

Radio.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string
};
