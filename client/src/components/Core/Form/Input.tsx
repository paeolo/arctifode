import React, { ComponentProps } from 'react';

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
    "file"
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
