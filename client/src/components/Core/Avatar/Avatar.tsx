import React from 'react';
import classNames from 'classnames/bind';
import styles from './Avatar.module.scss';

export const AvatarTypes = {
  sizes: ["xs", "sm", "lg", "xl"] as const,
  spaces: ["small", "normal"] as const,
};

export type AvatarProps = {
  size?: typeof AvatarTypes["sizes"][number];
  marginRight?: typeof AvatarTypes["spaces"][number];
  label?: string;
};

export const Avatar: React.FC<AvatarProps> = props => {

  return (
    <figure
      className={classNames.bind(styles)(
        'avatar',
        'custom',
        {
          [`avatar-${props.size}`]: props.size,
          'mr-2': props.marginRight === "small",
          'mr-3': props.marginRight === "normal"
        }
      )}
      data-initial={props.label}>
      {props.children}
    </figure>
  );
}
