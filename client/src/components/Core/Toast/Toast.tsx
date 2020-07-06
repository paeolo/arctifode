import React from 'react';

import classNames from 'classnames/bind';
import styles from './Toast.module.scss';

import { Button } from '@components/Core';

export const ToastTypes = {
  colors: ["primary", "success", "warning", "error"] as const,
};

export type ToastProps = {
  color: typeof ToastTypes["colors"][number];
  setError: (error: boolean) => void;
};

export const Toast: React.FC<ToastProps> = props => {

  return (
    <div
      className={classNames.bind(styles)(
        'toast',
        'custom',
        'fade-in',
        {
          [`toast-${props.color}`]: props.color,
        }
      )}>
      <Button
        cross
        position="right"
        onClick={() => props.setError(false)} />
      {props.children}
    </div>
  );
}
