import React, { ComponentProps } from "react";

import classNames from 'classnames/bind';
import styles from './Form.module.scss';

export type TextAreaProps = {
  inline?: boolean;
} & Omit<ComponentProps<'textarea'>, 'className'>;

export const TextArea: React.FC<TextAreaProps> = props => {

  const {
    inline,
    ...rest
  } = props;

  return (
    <textarea className={classNames.bind(styles)(
      'form-input',
      {
        'form-inline': props.inline
      }
    )}
      {...rest}
    />
  );
}

TextArea.displayName = "TextArea";
