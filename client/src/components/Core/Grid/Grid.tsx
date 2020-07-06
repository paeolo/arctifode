import React from 'react';

import classNames from 'classnames/bind';
import styles from './Grid.module.scss';

import { DefaultsType } from '../types';

export const GridTypes = {
  sizes: ["small", "normal"] as const,
};

export type GridProps = {
  maxWidth?: typeof DefaultsType["viewports"][number];
  paddingX?: typeof GridTypes["sizes"][number];
  paddingY?: typeof GridTypes["sizes"][number];
};

export const Grid: React.FC<GridProps> = props => {

  return (
    <div className={classNames.bind(styles)(
      'container',
      {
        [`grid-${props.maxWidth}`]: props.maxWidth,
        'px-1': props.paddingX === "small",
        'py-1': props.paddingY === "small",
        'px-2': props.paddingX === "normal",
        'py-2': props.paddingY === "normal",
      }
    )}>
      {props.children}
    </div>
  );
}
