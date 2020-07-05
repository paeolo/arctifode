import React, { ComponentProps } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './Form.module.scss';

export type RadioProps = {
  label: string;
} & Omit<ComponentProps<'input'>, 'className'>

export const Radio: React.FC<RadioProps> = props => {

  const {
    label,
    ...rest
  } = props;

  return (
    <label className={classNames.bind(styles)('form-radio')}>
      <input type="radio" {...rest} />
      <i className={classNames.bind(styles)('form-icon')} /> {label}
    </label>
  );
}

Radio.propTypes = {
  label: PropTypes.string
};
