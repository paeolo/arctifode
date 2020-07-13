import React from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import { OffCanvas, Breadcrumb, OffCanvasStore, Row, Column } from '@components/Core';

export type CanvasHeaderProps = {
  store: OffCanvasStore
};

export const CanvasHeader = (props: CanvasHeaderProps) => {

  return (
    <div className={classNames.bind(styles)('canvas-header')}>
      <Row align='center'>
        <Column size='auto'>
          <OffCanvas.Toogle store={props.store} />
        </Column>
        <Column size='auto'>
          <Breadcrumb>
            <Breadcrumb.Item>
              Projects
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              Dashboard
            </Breadcrumb.Item>
          </Breadcrumb>
        </Column>
      </Row>
    </div>
  );
}
