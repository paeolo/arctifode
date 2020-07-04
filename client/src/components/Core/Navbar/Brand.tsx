import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

export type BrandProps = {
  className?: string;
  center?: boolean;
  href?: string;
};

export const Brand: React.FC<BrandProps> = props => {

  return (
    <a
      href={props.href || '#'}
      className={classNames.bind(styles)('navbar-brand', props.className)}>
      {props.children}
    </a>
  );
}

Brand.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string
};
