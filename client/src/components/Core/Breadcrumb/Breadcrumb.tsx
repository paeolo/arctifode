import React from 'react';
import classNames from 'classnames/bind';
import styles from './Breadcrumb.module.scss';

import { BreadcrumbItem } from './Item';

export const BreadcrumbFC: React.FC = props => {

  return (
    <ul className={classNames.bind(styles)('breadcrumb')}>
      {props.children}
    </ul>
  );
}

export const Breadcrumb = Object.assign(
  BreadcrumbFC,
  {
    displayName: 'Breadcrumb',
    Item: BreadcrumbItem,
  }
);
