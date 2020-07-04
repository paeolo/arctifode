import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './Grid.module.scss';

import { DefaultsType } from '../types';

export const ColumnTypes = {
  sizes: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "auto"] as const,
  offsets: ["mx", "ml", "mr"] as const
};

type viewports = typeof DefaultsType["viewports"][number];
type sizes = typeof ColumnTypes["sizes"][number];
type viewportSizes = { [key in viewports]?: sizes };

export type ColumnProps = {
  className?: string;
  size?: sizes;
  sizes?: viewportSizes;
  offset?: typeof ColumnTypes["offsets"][number];
  hide?: viewports;
  show?: viewports;
};

export const Column: React.FC<ColumnProps> = props => {

  let sizes = [];
  if (props.sizes !== undefined)
    sizes = Object.entries(props.sizes).map(([key, value]) => `col-${key}-${value}`);

  return (
    <div className={classNames.bind(styles)(
      'column',
      {
        [`col-${props.size}`]: props.size,
        [`col-${props.offset}-auto`]: props.offset,
        [`hide-${props.hide}`]: props.hide,
        [`show-${props.show}`]: props.show
      },
      sizes,
      props.className
    )}>
      {props.children}
    </div>
  );
}

Column.propTypes = {
  size: PropTypes.oneOf(ColumnTypes["sizes"]),
  offset: PropTypes.oneOf(ColumnTypes["offsets"]),
  hide: PropTypes.oneOf(DefaultsType["viewports"]),
  show: PropTypes.oneOf(DefaultsType["viewports"])
};
