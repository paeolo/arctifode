import React from 'react';

import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

import { Section } from './Section';
import { Brand } from './Brand';

export const NavbarFC: React.FC = props => {

  return (
    <header className={classNames.bind(styles)(
      'navbar',
      'navbar-container'
    )}>
      {props.children}
    </header>
  );
}

export const Navbar = Object.assign(
  NavbarFC,
  {
    displayName: 'Navbar',
    Section: Section,
    Brand: Brand
  }
);
