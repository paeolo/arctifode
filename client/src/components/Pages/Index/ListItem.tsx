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
          <Avatar label={props.project.name.toUpperCase()[0]} size="lg" marginR='3' />
          <Link href={`/projects/${props.project.id}`}>
            <a className={classNames.bind(styles)('text-primary')}>
              {props.project.name}
            </a>
          </Link>
          <Icon
            icon={getVisibilityIcon(props.project.visibility)}
            marginL='2'
            color='gray' />
        </Column>
        <Column size="auto" offset="ml">
          <div className={classNames.bind(styles)('text-secondary')}>
            {`${t('common.updated')} ${timeAgo(new Date(props.project.updateDate))}`}
          </div>
        </Column>
      </Row>
    </div>
  );
}
