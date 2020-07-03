import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

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

  return <i className={classnames(
    'icon',
    {
      'icon-2x': props.size === "medium",
      'icon-3x': props.size === "large",
      'icon-4x': props.size === "huge"
    },
    icon
  )}
    {...rest}
  />
}

Icon.propTypes = {
  size: PropTypes.oneOf(IconTypes["sizes"]),
  icon: PropTypes.string
};
