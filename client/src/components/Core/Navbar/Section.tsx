import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export type SectionProps = {
  className?: string;
  center?: boolean;
};

export const Section: React.FC<SectionProps> = props => {

  return (
    <section className={classnames(
      {
        'navbar-section': !props.center,
        'navbar-center': props.center
      },
      props.className
    )}>
      {props.children}
    </section>
  );
}

Section.propTypes = {
  className: PropTypes.string,
  center: PropTypes.bool
};
