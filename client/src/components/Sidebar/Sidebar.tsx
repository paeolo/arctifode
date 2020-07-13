import React from 'react';
import { useObserver } from 'mobx-react-lite';

import { SidebarHeader } from './SidebarHeader';
import { Item } from './Item';

export const Sidebar: React.FC = () => {

  return useObserver(() =>
    <React.Fragment>
      <SidebarHeader label='My project' />
      <Item active label='Dashboard' icon='fas fa-home' />
      <Item label='Artifacts' icon='fas fa-industry' />
      <Item label='Releases' icon='fas fa-truck' />
      <Item label='Environments' icon='fas fa-server' />
      <Item label='Deployments' icon='fas fa-rocket' />
      <Item label='Tasks' icon='fas fa-tasks' />
      <Item label='Members' icon='fas fa-users' />
      <Item label='Settings' icon='fas fa-cog' />
    </React.Fragment>
  );
}
