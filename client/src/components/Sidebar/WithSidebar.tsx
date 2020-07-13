import React from 'react';
import { OffCanvas, Container } from '@components/Core'
import { useLocalStore } from 'mobx-react-lite';

import { Sidebar } from './Sidebar';
import { CanvasHeader } from './CanvasHeader';

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
        <Container maxWidth='lg' paddingX='medium'>
          <CanvasHeader store={store} />
          {props.children}
        </Container>
      </OffCanvas.Content>
    </OffCanvas >
  );
}
