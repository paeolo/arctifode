import React from 'react';
import classNames from 'classnames/bind';
import styles from './Avatar.module.scss';
import { WithModifiers } from '../Modifier';

export const AvatarTypes = {
  sizes: ["xs", "sm", "lg", "xl"] as const,
  spaces: ["small", "normal"] as const,
};

export type AvatarProps = {
  className?: string;
  size?: typeof AvatarTypes["sizes"][number];
  label?: string;
};

const AvatarFC: React.FC<AvatarProps> = props => {

  return (
    <figure
      className={classNames.bind(styles)(
        'avatar',
        'avatar-color',
        {
          [`avatar-${props.size}`]: props.size,
        },
        props.className
      )}
      data-initial={props.label}>
      {props.children}
    </figure>
  );
}

export const Avatar = WithModifiers<AvatarProps>(AvatarFC);
