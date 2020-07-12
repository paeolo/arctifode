import React, { useState } from 'react';
import { OffCanvas } from '@components/Core'
import { Sidebar } from './Sidebar';
import { useLocalStore, useObserver } from 'mobx-react-lite';

export const WithSidebar: React.FC = props => {

  const store = useLocalStore(() => ({
    active: false,
    setActive(active: boolean) { store.active = active }
  }));

  return (
    <OffCanvas store={store}>
      <OffCanvas.Sidebar>
        <Sidebar />
      </OffCanvas.Sidebar>
      <OffCanvas.Overlay store={store} />
      <OffCanvas.Content>
        <OffCanvas.Toogle store={store} />
        {props.children}
      </OffCanvas.Content>
    </OffCanvas >
  );
}
