import React from 'react';
import classNames from 'classnames/bind';
import styles from './OffCanvas.module.scss';

import { Sidebar } from './Sidebar';
import { Content } from './Content';
import { Toogle } from './Toogle';
import { Overlay } from './Overlay';

export type OffCanvasProps = {
  active?: boolean;
}

const OffCanvasFC: React.FC<OffCanvasProps> = props => {
  return (
    <div className={classNames.bind(styles)(
      'off-canvas-container',
      {
        'active-sidebar': props.active
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
