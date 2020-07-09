import React from "react";

import classNames from 'classnames/bind';
import styles from './Button.module.scss';

export type GroupProps = {
  block?: boolean;
};

export const ButtonGroupFC: React.FC<GroupProps> = props => {

  return (
    <div
      className={classNames.bind(styles)(
        'btn-group',
        { 'btn-group-block': props.block }
      )}>
      {props.children}
    </div>
  )
}

ButtonGroupFC.displayName = "Button.Group";
