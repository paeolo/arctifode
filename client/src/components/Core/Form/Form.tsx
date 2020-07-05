import React, { ComponentProps } from "react";

import classNames from 'classnames/bind';
import styles from './Form.module.scss';

import { FormGroup } from "./FormGroup";
import { FormLabel } from "./FormLabel";

export type FromProps = {
  horizontal?: boolean;
} & Omit<ComponentProps<'form'>, 'className'>;

const FormFC: React.FC<FromProps> = props => {

  const {
    horizontal,
    ...rest
  } = props;

  return (
    <form
      className={classNames.bind(styles)(
        {
          'form-horizontal': horizontal
        },
      )}
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
