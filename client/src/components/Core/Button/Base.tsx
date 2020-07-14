import React from 'react';

import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { WithModifiers, ModifierTypes } from '../Modifier';

export const ButtonBaseTypes = {
  sizes: ["small", "normal", "large"] as const,
  states: ["active", "disabled", "loading"] as const,
  types: ["primary", "link", "success", "error"] as const,
};

export type ButtonBaseProps = {
  className?: string;
  size?: typeof ButtonBaseTypes["sizes"][number];
  state?: typeof ButtonBaseTypes["states"][number];
  type?: typeof ButtonBaseTypes["types"][number];
  block?: boolean;
  action?: boolean;
  circle?: boolean;
  cross?: boolean;
  tooltip?: string;
  tooltipPosition?: typeof ModifierTypes["positions"][number];
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  children?: React.ReactNode;
};

export const ButtonBase = <T extends object>(Component: React.FC<any>) =>
  WithModifiers<ButtonBaseProps & T>(
    React.forwardRef((props: ButtonBaseProps & T, ref) => {

      const {
        className,
        size,
        state,
        type,
        block,
        action,
        circle,
        cross,
        tooltip,
        tooltipPosition,
        ...rest
      } = props;

      return (
        <Component
          ref={ref}
          className={classNames.bind(styles)(
            'btn',
            {
              [`${state}`]: state,
              [`btn-${type}`]: type,
              'btn-block': block,
              'btn-sm': size === "small",
              'btn-lg': size === "large",
              'btn-action': action || circle,
              's-circle': circle,
              'btn-clear': cross,
              'tooltip': tooltip,
              'tooltip-left': tooltip && tooltipPosition === "left",
              'tooltip-right': tooltip && tooltipPosition === "right",
            },
            className
          )}
          data-tooltip={tooltip}
          {...rest} />
      );
    })
  );
