import React from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import { useTranslate } from '@hooks';
import { Icon } from '@components/Core';
import { Link } from '@components/I18n';
import { SidebarItem } from './types';
import { getLocaleKey } from './utils';

type ItemProps = {
  id: number;
  icon: string;
  itemKey: SidebarItem;
  active?: boolean;
}

export const Item = (props: ItemProps) => {

  const { t } = useTranslate();

  const slug = props.itemKey === SidebarItem.DASHBOARD
    ? ''
    : `/${props.itemKey}`;

  return (
    <Link href={'/projects/'.concat(props.id.toString()).concat(slug)}>
      <a className={classNames.bind(styles)(
        'sidebar-item',
        {
          'active': props.active
        }
      )} >
        <Icon icon={props.icon} marginR='2' color='primary' />
        <span>
          {t(getLocaleKey(props.itemKey))}
        </span>
      </a >
    </Link>

  );
}
