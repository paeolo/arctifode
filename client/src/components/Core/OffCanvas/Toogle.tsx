import React from 'react';
import classNames from 'classnames/bind';
import styles from './OffCanvas.module.scss';

import { Icon } from '../Icon';
import { Button } from '../Button';
import { OffCanvasStore } from './OffCanvas';

export type ToogleProps = {
  store: OffCanvasStore
};

export const Toogle = (props: ToogleProps) => {
  return (
    <Button.Link
      className={classNames.bind(styles)('off-canvas-toogle')}
      type="link"
      onClick={() => props.store.setActive(!props.store.active)}>
      <Icon icon='fas fa-bars' />
    </Button.Link>
  );
}
