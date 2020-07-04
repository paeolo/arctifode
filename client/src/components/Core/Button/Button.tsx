import React, { ComponentProps } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './Button.module.scss';

import { Link } from './Link';
import { Group } from './Group';

export const ButtonTypes = {
  sizes: ["small", "normal", "large"] as const,
  states: ["active", "disabled", "loading"] as const,
  colors: ["primary", "link", "success", "error"] as const,
};

export type ButtonProps = {
  className?: string;
  size?: typeof ButtonTypes["sizes"][number];
  state?: typeof ButtonTypes["states"][number];
  color?: typeof ButtonTypes["colors"][number];
  block?: boolean;
  action?: boolean;
  circle?: boolean;
} & ComponentProps<'button'>;

const ButtonFC: React.FC<ButtonProps> = props => {

  const {
    className,
    size,
    state,
    color,
    block,
    action,
    circle,
    ...rest
  } = props;

  return (
    <button
      className={classNames.bind(styles)(
        'btn',
        {
          [`${state}`]: state,
          [`btn-${color}`]: color,
          'btn-block': block,
          'btn-sm': size === "small",
          'btn-lg': size === "large",
          'btn-action': action || circle,
          's-circle': circle,
        },
        className
      )}
      {...rest}
    />
  );
}

ButtonFC.propTypes = {
  size: PropTypes.oneOf(ButtonTypes["sizes"]),
  state: PropTypes.oneOf(ButtonTypes["states"]),
  color: PropTypes.oneOf(ButtonTypes["colors"]),
  block: PropTypes.bool,
  action: PropTypes.bool,
  circle: PropTypes.bool,
};

export const Button = Object.assign(
  ButtonFC,
  {
    displayName: 'Button',
    Link: Link,
    Group: Group
  }
);
