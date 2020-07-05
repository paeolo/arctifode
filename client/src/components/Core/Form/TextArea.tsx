import React, { ComponentProps } from "react";

import classNames from 'classnames/bind';
import styles from './Form.module.scss';

export type TextAreaProps = {
} & Omit<ComponentProps<'textarea'>, 'className'>;

export const TextArea: React.FC<TextAreaProps> = props => {

  return (
    <textarea className={classNames.bind(styles)('form-input')}>
      {props.children}
    </textarea>
  );
}

TextArea.displayName = "TextArea";
