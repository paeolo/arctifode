import React from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import { Avatar } from '@components/Core';
import { Link } from '@components/I18n';

type HeaderProps = {
  label: string;
}

export const Header = (props: HeaderProps) => {
  return (
    <Link href={`/projects/1`}>
      <a className={classNames.bind(styles)(
        'item',
        'header'
      )} >
        <Avatar label="M" marginRight="small" />
        <span>
          {props.label}
        </span>
      </a >
    </Link>

  );
}
