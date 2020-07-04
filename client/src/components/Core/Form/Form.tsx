import React, { ComponentProps } from "react";

import classNames from 'classnames/bind';
import styles from './Form.module.scss';

import { FormGroup } from "./FormGroup";
import { FormLabel } from "./FormLabel";

export type FromProps = {
  horizontal?: boolean;
} & ComponentProps<'form'>;

const FormFC: React.FC<FromProps> = props => {

  const {
    horizontal,
    className,
    ...rest
  } = props;

  return (
    <form
      className={classNames.bind(styles)(
        {
          'form-horizontal': horizontal
        },
        className)}
      {...rest}
    />
  );
}

export const Form = Object.assign(
  FormFC,
  {
    displayName: 'Form',
    Group: FormGroup,
    Label: FormLabel
  }
);
