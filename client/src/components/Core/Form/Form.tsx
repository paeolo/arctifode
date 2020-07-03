import React, { ComponentProps } from "react";
import classnames from 'classnames';

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
      className={classnames(
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
