import React, { useState } from 'react';
import { OffCanvas } from '@components/Core'
import { Sidebar } from './Sidebar';

export const WithSidebar: React.FC = props => {

  const [active, setActive] = useState(false);

  return (
    <OffCanvas active={active}>
      <OffCanvas.Sidebar>
        <Sidebar />
      </OffCanvas.Sidebar>
      <OffCanvas.Overlay setActive={setActive} />
      <OffCanvas.Content>
        <OffCanvas.Toogle setActive={setActive} />
        {props.children}
      </OffCanvas.Content>
    </OffCanvas >
  );
}
