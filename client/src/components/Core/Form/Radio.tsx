import React, { ComponentProps } from 'react';

import classNames from 'classnames/bind';
import styles from './Form.module.scss';

export type RadioProps = {
  inline?: boolean;
} & Omit<ComponentProps<'input'>, 'className'>

export const Radio: React.FC<RadioProps> = props => {

  const {
    inline,
    children,
    ...rest
  } = props;

  return (
    <label className={classNames.bind(styles)(
      'form-radio',
      {
        'form-inline': inline
      }
    )}>
      <input type="radio" {...rest} />
      <i className={classNames.bind(styles)('form-icon')} />
      {props.children}
    </label>
  );
}
