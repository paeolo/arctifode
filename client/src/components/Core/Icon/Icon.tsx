import React from 'react';

import classNames from 'classnames/bind';
import styles from './Icon.module.scss';

export const IconTypes = {
  sizes: ["normal", "medium", "large", "huge"] as const,
  directions: ["left", "right", "both"] as const,
};

export type IconProps = {
  size?: typeof IconTypes["sizes"][number];
  margin?: typeof IconTypes["directions"][number];
  icon?: string;
};

export const Icon: React.FC<IconProps> = props => {

  const {
    size,
    margin,
    icon,
    ...rest
  } = props;

  return <i className={classNames.bind(styles)(
    {
      'fa-2x': props.size === "medium",
      'fa-3x': props.size === "large",
      'fa-4x': props.size === "huge"
    },
    {
      [`margin-${margin}`]: margin
    },
    icon
  )}
    {...rest}
  />
}
