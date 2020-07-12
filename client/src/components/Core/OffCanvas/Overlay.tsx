import React from 'react';
import classNames from 'classnames/bind';
import styles from './OffCanvas.module.scss';

export type OverlayProps = {
  setActive?: (active: boolean) => void;
};

export const Overlay = (props: OverlayProps) => {
  return (
    <a className={classNames.bind(styles)(
      'off-canvas-overlay'
    )}
      onClick={() => props.setActive(false)}
    />
  );
}
