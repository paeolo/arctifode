import React from 'react';
import { useObserver } from 'mobx-react-lite';

import { Header } from './Header';
import { Item } from './Item';

export const Sidebar: React.FC = () => {

  return useObserver(() =>
    <React.Fragment>
      <Header label='My project' />
      <Item active label='Dashboard' icon='fas fa-home' />
      <Item label='Artifacts' icon='fas fa-industry' />
      <Item label='Releases' icon='fas fa-truck' />
      <Item label='Environments' icon='fas fa-server' />
      <Item label='Deployments' icon='fas fa-paper-plane' />
    </React.Fragment>
  );
}
