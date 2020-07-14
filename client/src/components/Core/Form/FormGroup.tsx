import React from "react";

import classNames from 'classnames/bind';
import styles from './Form.module.scss';

export type GroupProps = {
  success?: boolean,
  error?: boolean;
};

export const FormGroup: React.FC<GroupProps> = props => {

  const {
    success,
    error,
    ...rest
  } = props;

  return (
    <div
      className={classNames.bind(styles)(
        'form-group',
        {
          'has-success': success,
          'has-error': error
        }
      )}
      {...rest}
    />
  );
}

FormGroup.displayName = 'Group';
