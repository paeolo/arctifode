import React from 'react';
import classNames from 'classnames/bind';
import styles from './Tile.module.scss';

import { Action } from './Action';
import { Content } from './Content';
import { Icon } from './Icon';
import { Subtitle } from './Subtitle';
import { Title } from './Title';
import { WithModifiers } from '../Modifier';

type TileProps = {
  className?: string;
  centered?: boolean;
}

const TileFC: React.FC<TileProps> = props => {

  return (
    <div className={classNames.bind(styles)(
      'tile',
      {
        'tile-centered': props.centered
      },
      props.className
    )}>
      {props.children}
    </div>
  );
}

export const Tile = Object.assign(
  WithModifiers<TileProps>(TileFC),
  {
    displayName: 'Tile',
    Action: Action,
    Content: Content,
    Icon: Icon,
    Subtitle: Subtitle,
    Title: Title
  }
);
