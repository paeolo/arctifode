import React from 'react';
import { useObserver } from 'mobx-react-lite';

import { Header } from './Header';
import { Item } from './Item';

export const Sidebar: React.FC = () => {

  return useObserver(() =>
    <React.Fragment>
      <Header label='My project' />
      <Item active label='Summary' icon='fas fa-home' />
    </React.Fragment>
  );
}
