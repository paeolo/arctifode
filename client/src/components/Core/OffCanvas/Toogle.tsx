import React from 'react';
import classNames from 'classnames/bind';
import styles from './OffCanvas.module.scss';

import { Icon } from '../Icon';
import { Button } from '../Button';

export type ToogleProps = {
  setActive?: (active: boolean) => void;
};

export const Toogle = (props: ToogleProps) => {
  return (
    <Button.Link
      className={classNames.bind(styles)('off-canvas-toogle')}
      color="link"
      onClick={() => props.setActive(true)}
      action>
      <Icon icon='fas fa-bars' />
    </Button.Link>
  );
}
