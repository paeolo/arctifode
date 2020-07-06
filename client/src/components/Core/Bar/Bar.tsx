import React from 'react';

import classNames from 'classnames/bind';
import styles from './Bar.module.scss';

export type BarProps = {
  progress: number;
  small?: boolean;
};

export const Bar: React.FC<BarProps> = props => {

  return (
    <div
      className={classNames.bind(styles)(
        'bar',
        {
          'bar-sm': props.small
        }
      )}>
      <div
        className={classNames.bind(styles)(
          'bar-item',
          'tooltip'
        )}
        data-tooltip={`${props.progress}%`}
        style={{ width: `${props.progress}%` }} />
    </div>
  );
}
