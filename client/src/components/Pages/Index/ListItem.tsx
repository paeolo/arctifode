import React from 'react';
import classNames from 'classnames/bind';
import styles from './Index.module.scss';

import { Row, Column, Avatar, Icon } from '@components/Core';
import { Link } from '@components/I18n/Link';
import { Project } from '@openapi';
import { getVisibilityIcon } from '../../../utils';
import { useTimeAgo, useTranslate } from '@hooks';

export type ListItemProps = {
  project: Project
}

export const ListItem = (props: ListItemProps) => {

  const timeAgo = useTimeAgo();
  const { t } = useTranslate();

  return (
    <div className={classNames.bind(styles)('list-item')}>
      <Row align="center">
        <Column size="auto">
          <Avatar label="M" size="lg" marginRight="normal" />
          <Link href={`/projects/${props.project.id}`}>
            <a className={classNames.bind(styles)('text-primary')}>
              {props.project.name}
            </a>
          </Link>
          <Icon
            icon={getVisibilityIcon(props.project.visibility)}
            margin="left"
            secondary />
        </Column>
        <Column size="auto" offset="ml">
          <div className={classNames.bind(styles)('text-secondary')}>
            {`${t('common.updated')} ${timeAgo.format(Date.parse(props.project.updateDate))}`}
          </div>
        </Column>
      </Row>
    </div>
  );
}
