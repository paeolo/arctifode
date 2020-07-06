import React from 'react';
import classNames from 'classnames';

export const IconTypes = {
  sizes: ["normal", "medium", "large", "huge"] as const,
};

export type IconProps = {
  size?: typeof IconTypes["sizes"][number];
  icon?: string;
};

export const Icon: React.FC<IconProps> = props => {

  const {
    size,
    icon,
    ...rest
  } = props;

  return <i className={classNames(
    {
      'fa-2x': props.size === "medium",
      'fa-3x': props.size === "large",
      'fa-4x': props.size === "huge"
    },
    icon
  )}
    {...rest}
  />
}
