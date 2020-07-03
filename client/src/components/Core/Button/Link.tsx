import React, { ComponentProps } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const LinkTypes = {
  sizes: ["small", "normal", "large"] as const,
  states: ["active", "disabled", "loading"] as const
};

export type LinkProps = {
  className?: string;
  size?: typeof LinkTypes["sizes"][number];
  state?: typeof LinkTypes["states"][number];
  block?: boolean;
  action?: boolean;
  circle?: boolean;
} & ComponentProps<'a'>;

export const Link: React.FC<LinkProps> = props => {

  const {
    className,
    size,
    state,
    block,
    action,
    circle,
    ...rest
  } = props;

  return (
    <a
      className={classnames(
        'btn', 'btn-link',
        {
          [`${state}`]: state,
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

Link.propTypes = {
  size: PropTypes.oneOf(LinkTypes["sizes"]),
  state: PropTypes.oneOf(LinkTypes["states"]),
  block: PropTypes.bool,
  action: PropTypes.bool,
  circle: PropTypes.bool,
};
