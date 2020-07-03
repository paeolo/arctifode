import React, { ComponentProps } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const InputTypes = {
  types: [
    "text",
    "email",
    "tel",
    "password",
    "number",
    "search",
    "color",
    "date",
    "time",
  ] as const,
};

export type InputProps = {
  type?: typeof InputTypes["types"][number];
  className?: string
} & Omit<ComponentProps<'input'>, 'size'>;


export const Input: React.FC<InputProps> = props => {

  const {
    type,
    className,
    ...rest
  } = props;

  return (
    <input
      type={type}
      className={classnames('form-input', className)}
      {...rest}
    />
  );
}

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(InputTypes["types"]),
  id: PropTypes.string
};
