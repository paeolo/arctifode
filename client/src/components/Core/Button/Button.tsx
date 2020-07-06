import React, { ComponentProps } from 'react';

import classNames from 'classnames/bind';
import styles from './Button.module.scss';

import { Link } from './Link';
import { Group } from './Group';

export const ButtonTypes = {
  sizes: ["small", "normal", "large"] as const,
  states: ["active", "disabled", "loading"] as const,
  colors: ["primary", "link", "success", "error"] as const,
  positions: ["left", "right"] as const,
  types: ["submit", "button", "reset"] as const
};

export type ButtonProps = {
  size?: typeof ButtonTypes["sizes"][number];
  state?: typeof ButtonTypes["states"][number];
  color?: typeof ButtonTypes["colors"][number];
  position?: typeof ButtonTypes["positions"][number];
  type?: typeof ButtonTypes["types"][number];
  block?: boolean;
  action?: boolean;
  circle?: boolean;
  cross?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const ButtonFC: React.FC<ButtonProps> = props => {

  const {
    size,
    state,
    color,
    position,
    type,
    block,
    action,
    circle,
    cross,
    ...rest
  } = props;

  return (
    <button
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
          'btn-clear': cross,
          's-circle': circle
        }
      )}
      type={type || "button"}
      {...rest}
    />
  );
}

export const Button = Object.assign(
  ButtonFC,
  {
    displayName: 'Button',
    Link: Link,
    Group: Group
  }
);
