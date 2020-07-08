import React, { ComponentProps } from 'react';

import classNames from 'classnames/bind';
import styles from './Button.module.scss';

export const LinkTypes = {
  sizes: ["small", "normal", "large"] as const,
  states: ["active", "disabled", "loading"] as const,
  colors: ["primary", "link", "success", "error"] as const,
  positions: ["left", "right"] as const,
};

export type LinkProps = {
  size?: typeof LinkTypes["sizes"][number];
  state?: typeof LinkTypes["states"][number];
  color?: typeof LinkTypes["colors"][number];
  position?: typeof LinkTypes["positions"][number];
  block?: boolean;
  action?: boolean;
  circle?: boolean;
} & Omit<ComponentProps<'a'>, 'className'>;

export const Link: React.FC<LinkProps> = React.forwardRef(
  (props, ref) => {
    const {
      size,
      state,
      color,
      position,
      block,
      action,
      circle,
      ...rest
    } = props;

    return (
      <a
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
            's-circle': circle
          }
        )}
        {...rest}
      />
    );
  });
