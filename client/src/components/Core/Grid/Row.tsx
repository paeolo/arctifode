import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export type RowProps = {
  className?: string;
  oneline?: boolean;
  gapless?: boolean;
};

export const Row: React.FC<RowProps> = props => {

  return (
    <div className={classnames(
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
