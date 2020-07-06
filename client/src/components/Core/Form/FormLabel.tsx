import React, { ComponentProps } from "react";

import classNames from 'classnames/bind';
import styles from './Form.module.scss';

export type LabelProps = {
} & Omit<ComponentProps<'label'>, 'className'>;

export const FormLabel: React.FC<LabelProps> = props => {

  return (
    <label
      className={classNames.bind(styles)('form-label')}
      {...props}
    />
  );
}

FormLabel.displayName = "Label";
