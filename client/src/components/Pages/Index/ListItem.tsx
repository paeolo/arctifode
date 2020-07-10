import React from 'react';
import classNames from 'classnames/bind';
import styles from './Index.module.scss';

import { Row, Column, Avatar, Icon } from '@components/Core';
import { Link } from '@components/I18n/Link';

export const ListItem = () => {

  return (
    <div className={classNames.bind(styles)('list-item')}>
      <Row align="center">
        <Column size="auto">
          <Avatar label="M" size="lg" marginRight="normal" />
          <Link href='/projects/2'>
            <a className={classNames.bind(styles)('text-primary')}>
              My Project
          </a>
          </Link>
          <Icon icon='fas fa-lock' margin="left" secondary />
        </Column>
        <Column size="auto" offset="ml">
          <div className={classNames.bind(styles)('text-secondary')}>
            Updated 6 hours ago
          </div>
        </Column>
      </Row>
    </div>
  );
}
