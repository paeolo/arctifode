import React from 'react';
import classNames from 'classnames/bind';
import styles from './OffCanvas.module.scss';

export type SidebarProps = {
  active?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = props => {
  return (
    <div
      id="sidebar"
      className={classNames.bind(styles)(
        'off-canvas-sidebar',
        {
          'active': props.active
        }
      )}>
      {props.children}
    </div>
  );
}
