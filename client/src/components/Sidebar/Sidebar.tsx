import React from 'react';

import { SidebarHeader } from './SidebarHeader';
import { Item } from './Item';
import { SidebarItem } from './types';


type SidebarProps = {
  label: string;
  id: number;
  active: SidebarItem;
};

export const Sidebar = (props: SidebarProps) => {

  return (
    <React.Fragment>
      <SidebarHeader label={props.label} />
      <Item
        id={props.id}
        active={props.active === SidebarItem.DASHBOARD}
        itemKey={SidebarItem.DASHBOARD}
        icon='fas fa-home' />
      <Item
        id={props.id}
        active={props.active === SidebarItem.ARTIFACTS}
        itemKey={SidebarItem.ARTIFACTS}
        icon='fas fa-industry' />
      <Item
        id={props.id}
        active={props.active === SidebarItem.RELEASES}
        itemKey={SidebarItem.RELEASES}
        icon='fas fa-truck' />
      <Item
        id={props.id}
        active={props.active === SidebarItem.ENVIRONMENTS}
        itemKey={SidebarItem.ENVIRONMENTS}
        icon='fas fa-server' />
      <Item
        id={props.id}
        active={props.active === SidebarItem.DEPLOYMENTS}
        itemKey={SidebarItem.DEPLOYMENTS}
        icon='fas fa-rocket' />
      <Item
        id={props.id}
        active={props.active === SidebarItem.TASKS}
        itemKey={SidebarItem.TASKS}
        icon='fas fa-tasks' />
      <Item
        id={props.id}
        active={props.active === SidebarItem.MEMBERS}
        itemKey={SidebarItem.MEMBERS}
        icon='fas fa-users' />
      <Item
        id={props.id}
        active={props.active === SidebarItem.SETTINGS}
        itemKey={SidebarItem.SETTINGS}
        icon='fas fa-cog' />
    </React.Fragment>
  );
}
