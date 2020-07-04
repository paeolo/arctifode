import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

import { Section } from './Section';
import { Brand } from './Brand';

export type NavbarProps = {
  className?: string;
};

export const NavbarFC: React.FC<NavbarProps> = props => {

  return (
    <header className={classNames.bind(styles)('navbar', props.className)}>
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
