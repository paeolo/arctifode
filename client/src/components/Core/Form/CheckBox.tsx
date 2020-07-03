import React, { ComponentProps } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

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
    <label className={classnames('form-checkbox', className)}>
      <input type="checkbox" {...rest} />
      <i className="form-icon" /> {label}
    </label>
  );
}

CheckBox.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string
};
