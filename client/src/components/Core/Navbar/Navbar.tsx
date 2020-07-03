import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Section } from './Section';

import { Brand } from './Brand';

export type NavbarProps = {
  className?: string;
};

export const NavbarFC: React.FC<NavbarProps> = props => {

  return (
    <header className={classnames('navbar', props.className)}>
      {props.children}
    </header>
  );
}

NavbarFC.propTypes = {
  className: PropTypes.string
}

export const Navbar = Object.assign(
  NavbarFC,
  {
    displayName: 'Navbar',
    Section: Section,
    Brand: Brand
  }
);
