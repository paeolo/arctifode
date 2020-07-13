import React from 'react';
import classNames from 'classnames/bind';
import styles from './Empty.module.scss';

import { Action } from './Action';
import { Icon } from './Icon';
import { Subtitle } from './Subtitle';
import { Title } from './Title';

const EmptyFC: React.FC = props => {

  return (
    <div className={classNames.bind(styles)('empty')}>
      {props.children}
    </div>
  );
}

export const Empty = Object.assign(
  EmptyFC,
  {
    displayName: 'Empty',
    Action: Action,
    Icon: Icon,
    Subtitle: Subtitle,
    Title: Title
  }
);
