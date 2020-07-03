import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export type BrandProps = {
  className?: string;
  center?: boolean;
  href?: string;
};

export const Brand: React.FC<BrandProps> = props => {

  return (
    <a
      href={props.href || '#'}
      className={classnames('navbar-brand', props.className)}>
      {props.children}
    </a>
  );
}

Brand.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string
};
