import React, { ComponentProps } from 'react';

import classNames from 'classnames/bind';
import styles from './Form.module.scss';

import { useTranslate } from '../../../hooks';
import { Hint } from './Hint';

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

export type YupError = {
  key: string;
  values: object;
}

export type InputProps = {
  type?: typeof InputTypes["types"][number];
  inline?: boolean;
  error?: string | YupError;
} & Omit<ComponentProps<'input'>, 'className'>;

export const Input: React.FC<InputProps> = props => {

  const {
    type,
    inline,
    error,
    ...rest
  } = props;

  const { locale, t } = useTranslate();

  return (
    <React.Fragment>
      <input
        type={type}
        className={classNames.bind(styles)(
          'form-input',
          {
            'form-inline': inline,
            'is-error': error
          }
        )}
        {...rest}
      />
      {error &&
        <Hint>
          {(() => {
            if (typeof error === 'string')
              return error
            else
              return t(error.key, error.values)
          })()
          }
        </Hint>}
    </React.Fragment>

  );
}
