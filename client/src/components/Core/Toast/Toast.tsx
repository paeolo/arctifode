import React from 'react';

import classNames from 'classnames/bind';
import styles from './Toast.module.scss';

import { Button } from '@components/Core';
import { WithModifiers } from '../Modifier';

export const ToastTypes = {
  types: ["primary", "success", "warning", "error"] as const,
};

export type ToastProps = {
  className?: string;
  type: typeof ToastTypes["types"][number];
  setError: (error: boolean) => void;
};

const ToastFC: React.FC<ToastProps> = props => {

  return (
    <div
      className={classNames.bind(styles)(
        'toast',
        'fade-in',
        {
          [`toast-${props.type}`]: props.type,
        },
        props.className
      )}>
      <Button
        cross
        float="right"
        onClick={() => props.setError(false)} />
      {props.children}
    </div>
  );
}

export const Toast = WithModifiers<ToastProps>(ToastFC);
