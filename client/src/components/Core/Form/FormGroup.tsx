import React from "react";
import classnames from 'classnames';

export type GroupProps = {
  className?: string;
  success?: boolean,
  error?: boolean;
};

export const FormGroup: React.FC<GroupProps> = props => {

  const {
    className,
    success,
    error,
    ...rest
  } = props;

  return (
    <div
      className={classnames(
        'form-group',
        {
          'has-success': success,
          'has-error': error
        },
        className)}
      {...rest}
    />
  );
}

FormGroup.displayName = 'Group';
