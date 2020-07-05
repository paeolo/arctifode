import React, { ComponentProps } from "react";

import classNames from 'classnames/bind';
import styles from './Form.module.scss';

export type LabelProps = {
  id?: string;
} & Omit<ComponentProps<'label'>, 'className'>;

export const FormLabel: React.FC<LabelProps> = props => {

  const {
    id,
    ...rest
  } = props;

  return (
    <label
      className={classNames.bind(styles)('form-label')}
      htmlFor={id}
      {...rest}
    />
  );
}

FormLabel.displayName = "Label";
