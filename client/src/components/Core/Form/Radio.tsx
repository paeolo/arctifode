import React, { ComponentProps } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

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
    <label className={classnames('form-radio', className)}>
      <input type="radio" {...rest} />
      <i className="form-icon" /> {label}
    </label>
  );
}

Radio.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string
};
