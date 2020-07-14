import React from 'react';
import classNames from 'classnames/bind';
import styles from './Index.module.scss';

import { ListItem } from './ListItem';
import { Project } from '@openapi';

export type ListProps = {
  projects: Project[];
}

export const List = (props: ListProps) => {

  return (
    <div className={classNames.bind(styles)('list')}>
      {props.projects.map(value =>
        <ListItem
          key={value.id}
          project={value} />
      )}
    </div>
  );
}
