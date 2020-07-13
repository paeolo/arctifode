import React from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import { Avatar } from '@components/Core';
import { Link } from '@components/I18n';

type SidebarHeaderProps = {
  label: string;
}

export const SidebarHeader = (props: SidebarHeaderProps) => {
  return (
    <Link href={`/projects/1`}>
      <a className={classNames.bind(styles)(
        'sidebar-header',
        'sidebar-item',
      )} >
        <div>
          <Avatar label={props.label.toUpperCase()[0]} marginRight="small" />
        </div>
        <span>
          {props.label}
        </span>
      </a >
    </Link>
  );
}
