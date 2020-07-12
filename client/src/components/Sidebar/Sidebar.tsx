import React from 'react';
import { useObserver } from 'mobx-react-lite';

export const Sidebar: React.FC = () => {

  return useObserver(() =>
    <React.Fragment>
      lol
    </React.Fragment>
  );
}
