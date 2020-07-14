import React from 'react';

import classNames from 'classnames/bind';
import styles from './Icon.module.scss';
import { WithModifiers } from '../Modifier';

export const IconTypes = {
  sizes: ["normal", "medium", "large", "huge"] as const,
};

export type IconProps = {
  className?: string;
  size?: typeof IconTypes["sizes"][number];
  icon?: string;
};

const IconFC: React.FC<IconProps> = props => {

  const {
    className,
    size,
    icon,
    ...rest
  } = props;

  return <i className={classNames.bind(styles)(
    {
      'fa-2x': props.size === "medium",
      'fa-3x': props.size === "large",
      'fa-4x': props.size === "huge",
    },
    icon,
    className
  )}
    {...rest}
  />
}

export const Icon = WithModifiers<IconProps>(IconFC);
