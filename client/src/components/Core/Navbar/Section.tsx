import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

export type SectionProps = {
  center?: boolean;
};

export const Section: React.FC<SectionProps> = props => {

  return (
    <section className={classNames.bind(styles)(
      {
        'navbar-section': !props.center,
        'navbar-center': props.center
      }
    )}>
      {props.children}
    </section>
  );
}

Section.propTypes = {
  center: PropTypes.bool
};
