import React from 'react';

import classNames from 'classnames/bind';
import styles from './Grid.module.scss';

import { DefaultsType } from '../types';

export const ContainerTypes = {
  sizes: ["small", "normal", "medium"] as const,
};

export type ContainerProps = {
  maxWidth?: typeof DefaultsType["viewports"][number];
  paddingX?: typeof ContainerTypes["sizes"][number];
  paddingY?: typeof ContainerTypes["sizes"][number];
};

export const Container: React.FC<ContainerProps> = props => {

  return (
    <div className={classNames.bind(styles)(
      'container',
      {
        [`grid-${props.maxWidth}`]: props.maxWidth,
        'px-1': props.paddingX === "small",
        'py-1': props.paddingY === "small",
        'px-2': props.paddingX === "normal",
        'py-2': props.paddingY === "normal",
        'px-3': props.paddingX === "medium",
        'py-3': props.paddingY === "medium",
      }
    )}>
      {props.children}
    </div>
  );
}
