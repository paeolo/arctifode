import React from 'react';

import classNames from 'classnames/bind';
import styles from './Button.module.scss';

export const ButtonBaseTypes = {
  sizes: ["small", "normal", "large"] as const,
  states: ["active", "disabled", "loading"] as const,
  colors: ["primary", "link", "success", "error"] as const,
  positions: ["left", "right"] as const,
};

export type ButtonBaseProps = {
  size?: typeof ButtonBaseTypes["sizes"][number];
  state?: typeof ButtonBaseTypes["states"][number];
  color?: typeof ButtonBaseTypes["colors"][number];
  position?: typeof ButtonBaseTypes["positions"][number];
  block?: boolean;
  action?: boolean;
  circle?: boolean;
  cross?: boolean;
  tooltip?: string;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  children?: React.ReactNode;
};

export const ButtonBase = <T extends object>(Component: React.FC<any>) =>
  React.forwardRef((props: ButtonBaseProps & T, ref) => {

    const {
      size,
      state,
      color,
      position,
      block,
      action,
      circle,
      cross,
      tooltip,
      ...rest
    } = props;

    return (
      <Component
        className={classNames.bind(styles)(
          'btn',
          {
            [`${state}`]: state,
            [`btn-${color}`]: color,
            [`float-${position}`]: position,
            'btn-block': block,
            'btn-sm': size === "small",
            'btn-lg': size === "large",
            'btn-action': action || circle,
            's-circle': circle,
            'btn-clear': cross,
            'tooltip': tooltip,
            'tooltip-left': tooltip && position === "right",
            'tooltip-right': tooltip && position === "left"
          }
        )}
        data-tooltip={tooltip}
        {...rest} />
    );
  });
