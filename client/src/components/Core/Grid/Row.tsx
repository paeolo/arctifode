import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './Grid.module.scss';

export type RowProps = {
  className?: string;
  oneline?: boolean;
  gapless?: boolean;
};

export const Row: React.FC<RowProps> = props => {

  return (
    <div className={classNames.bind(styles)(
      'columns',
      {
        'col-gapless': props.gapless,
        'col-oneline': props.oneline
      },
      props.className
    )}>
      {props.children}
    </div>
  );
}

Row.propTypes = {
  className: PropTypes.string,
  gapless: PropTypes.bool,
  oneline: PropTypes.bool
};
