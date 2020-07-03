import React, { ComponentProps } from "react";
import classnames from 'classnames';

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
      className={classnames('form-label', className)}
      htmlFor={id}
      {...rest}
    />
  );
}

FormLabel.displayName = "Label";
