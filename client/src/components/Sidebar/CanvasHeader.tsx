import React from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import { OffCanvas, Breadcrumb, OffCanvasStore, Row, Column } from '@components/Core';
import { SidebarItem } from './types';
import { useTranslate } from '@hooks';
import { getLocaleKey } from './utils';

export type CanvasHeaderProps = {
  label: string;
  active: SidebarItem;
  store: OffCanvasStore
};

export const CanvasHeader = (props: CanvasHeaderProps) => {

  const { t } = useTranslate();

  return (
    <div className={classNames.bind(styles)('canvas-header')}>
      <Row align='center'>
        <Column size='auto'>
          <OffCanvas.Toogle store={props.store} />
        </Column>
        <Column size='auto'>
          <Breadcrumb>
            <Breadcrumb.Item>
              {t('index.projects')}
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              {props.label}
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              {t(getLocaleKey(props.active))}
            </Breadcrumb.Item>
          </Breadcrumb>
        </Column>
      </Row>
    </div>
  );
}
