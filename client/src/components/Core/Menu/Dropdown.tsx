import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import { Icon } from '@components/Core';

export const MenuDropdownTypes = {
  sizes: ["small", "normal", "large"] as const,
  states: ["active", "disabled", "loading"] as const
};

export type MenuDropdownProps = {
  label: string;
  icon?: string;
  size?: typeof MenuDropdownTypes["sizes"][number];
  state?: typeof MenuDropdownTypes["states"][number];
  block?: boolean;
  right?: boolean;
};

export const MenuDropdown: React.FC<MenuDropdownProps> = props => {

  const icon = props.icon
    ? props.icon
    : 'fas fa-caret-down';

  return (
    <div className={classNames.bind(styles)(
      'dropdown',
      {
        'dropdown-right': props.right
      }
    )}>
      <a
        className={classNames.bind(styles)(
          'btn', 'btn-link', 'dropdown-toggle',
          {
            [`${props.state}`]: props.state,
            'btn-block': props.block,
            'btn-sm': props.size === "small",
            'btn-lg': props.size === "large"
          }
        )}
        tabIndex={0}>
        {props.label} <Icon icon={icon} />
      </a>
      {props.children}
    </div>
  );
}

MenuDropdown.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(MenuDropdownTypes["sizes"]),
  state: PropTypes.oneOf(MenuDropdownTypes["states"]),
  block: PropTypes.bool,
  right: PropTypes.bool,
};
