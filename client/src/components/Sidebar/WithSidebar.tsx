import React from 'react';
import { OffCanvas, Container } from '@components/Core'
import { useLocalStore } from 'mobx-react-lite';

import { Sidebar } from './Sidebar';
import { CanvasHeader } from './CanvasHeader';
import { SidebarItem } from './types';

type WithSidebarProps = {
  label: string;
  id: number;
  active: SidebarItem;
}

export const WithSidebar: React.FC<WithSidebarProps> = props => {

  const store = useLocalStore(() => ({
    active: false,
    setActive(active: boolean) { store.active = active }
  }));

  return (
    <OffCanvas store={store}>
      <OffCanvas.Sidebar>
        <Sidebar
          label={props.label}
          id={props.id}
          active={props.active} />
      </OffCanvas.Sidebar>
      <OffCanvas.Overlay store={store} />
      <OffCanvas.Content>
        <Container maxWidth='lg' paddingX='medium'>
          <CanvasHeader
            label={props.label}
            active={props.active}
            store={store} />
          {props.children}
        </Container>
      </OffCanvas.Content>
    </OffCanvas >
  );
}
