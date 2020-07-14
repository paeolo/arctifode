import React from 'react';
import classNames from 'classnames/bind';
import styles from './OffCanvas.module.scss';
import { useObserver } from 'mobx-react-lite';
import { useMount, useUnmount } from 'react-use';

import { Sidebar } from './Sidebar';
import { Content } from './Content';
import { Toogle } from './Toogle';
import { Overlay } from './Overlay';

export type OffCanvasStore = {
  active: boolean;
  setActive: (active: boolean) => void;
}

type OffCanvasProps = {
  store: OffCanvasStore
}

const OffCanvasFC: React.FC<OffCanvasProps> = props => {

  const onResize = () => {
    if (props.store.active)
      props.store.setActive(false);
  };
  useMount(() => { window.addEventListener('resize', onResize) });
  useUnmount(() => { window.removeEventListener('resize', onResize) });

  return useObserver(() =>
    <div
      className={classNames.bind(styles)(
        'off-canvas-container',
        {
          'active-sidebar': props.store.active
        }
      )}>
      {props.children}
    </div >
  );
}

export const OffCanvas = Object.assign(
  OffCanvasFC,
  {
    displayName: 'OffCanvas',
    Overlay: Overlay,
    Sidebar: Sidebar,
    Content: Content,
    Toogle: Toogle
  }
);
