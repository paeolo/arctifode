import React from 'react';
import classNames from 'classnames/bind';
import styles from './Breadcrumb.module.scss';

export const BreadcrumbItem: React.FC = props => {

  return (
    <li
      className={classNames.bind(styles)(
        'breadcrumb-item',
      )}>
      {props.children}
    </li>
  );
}
