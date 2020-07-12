import React from 'react';
import classNames from 'classnames/bind';
import styles from './OffCanvas.module.scss';

import { OffCanvasStore } from './OffCanvas';

export type OverlayProps = {
  store: OffCanvasStore
};

export const Overlay = (props: OverlayProps) => {
  return (
    <a className={classNames.bind(styles)(
      'off-canvas-overlay'
    )}
      onClick={() => props.store.setActive(false)}
    />
  );
}
