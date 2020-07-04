import React, { ComponentProps } from "react";

import classNames from 'classnames/bind';
import styles from './Form.module.scss';

export type LabelProps = {
  className?: string;
  id?: string;
} & ComponentProps<'label'>;

export const FormLabel: React.FC<LabelProps> = props => {

  const {
    className,
    id,
    ...rest
  } = props;

  return (
    <label
      className={classNames.bind(styles)('form-label', className)}
      htmlFor={id}
      {...rest}
    />
  );
}

FormLabel.displayName = "Label";
