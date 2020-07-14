import React from 'react';

import classNames from 'classnames/bind';
import styles from './Grid.module.scss';

export const RowTypes = {
  alignements: ["center"] as const
};

export type RowProps = {
  oneline?: boolean;
  gapless?: boolean;
  align?: typeof RowTypes["alignements"][number];
};

export const Row: React.FC<RowProps> = props => {

  return (
    <div
      className={classNames.bind(styles)(
        'columns',
        {
          'col-gapless': props.gapless,
          'col-oneline': props.oneline,
          'align-center': props.align === "center"
        }
      )}>
      {props.children}
    </div>
  );
}
