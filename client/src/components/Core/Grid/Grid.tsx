import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { DefaultsType } from '../types';

export type GridProps = {
  className?: string;
  maxWidth?: typeof DefaultsType["viewports"][number]
};

export const Grid: React.FC<GridProps> = props => {

  return (
    <div className={classnames(
      'container',
      {
        [`grid-${props.maxWidth}`]: props.maxWidth
      },
      props.className
    )}>
      {props.children}
    </div>
  );
}

Grid.propTypes = {
  className: PropTypes.string
};
