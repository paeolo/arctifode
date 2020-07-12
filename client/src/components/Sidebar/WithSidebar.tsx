import React from 'react';
import { OffCanvas } from '@components/Core'
import { Sidebar } from './Sidebar';
import { useLocalStore } from 'mobx-react-lite';

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
        <OffCanvas.Header>
          <OffCanvas.Toogle store={store} />
        </OffCanvas.Header>
        {props.children}
      </OffCanvas.Content>
    </OffCanvas >
  );
}
