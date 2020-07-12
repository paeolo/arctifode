import React from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import { Icon } from '@components/Core';
import { Link } from '@components/I18n';

type ItemProps = {
  icon: string;
  label: string;
  active?: boolean;
}

export const Item = (props: ItemProps) => {
  return (
    <Link href={`/projects/1`}>
      <a className={classNames.bind(styles)(
        'item',
        {
          'active': props.active
        }
      )} >
        <Icon icon={props.icon} margin="right" />
        <span>
          {props.label}
        </span>
      </a >
    </Link>

  );
}
