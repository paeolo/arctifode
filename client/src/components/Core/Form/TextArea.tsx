import React, { ComponentProps } from "react";

import classNames from 'classnames/bind';
import styles from './Form.module.scss';

export type TextAreaProps = {
  className?: string;
} & ComponentProps<'textarea'>;

export const TextArea: React.FC<TextAreaProps> = props => {

  const { className, ...rest } = props;

  return (
    <textarea
      className={classNames.bind(styles)("form-input", className)}
      {...rest}
    />
  );
}

TextArea.displayName = "TextArea";
