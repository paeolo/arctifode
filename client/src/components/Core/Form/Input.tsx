import React, { ComponentProps } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './Form.module.scss';

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
  inline?: boolean;
} & Omit<ComponentProps<'input'>, 'className'>;


export const Input: React.FC<InputProps> = props => {

  const {
    type,
    inline,
    ...rest
  } = props;

  return (
    <input
      type={type}
      className={classNames.bind(styles)(
        'form-input',
        {
          'form-inline': inline
        }
      )}
      {...rest}
    />
  );
}

Input.propTypes = {
  type: PropTypes.oneOf(InputTypes["types"]),
  inline: PropTypes.bool,
  id: PropTypes.string
};
