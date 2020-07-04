import PropTypes from "prop-types";
import React from "react";

import classNames from 'classnames/bind';
import styles from './Button.module.scss';

export type GroupProps = {
  block?: boolean;
  className?: string;
};

export const Group: React.FC<GroupProps> = props => {

  return (
    <div
      className={classNames.bind(styles)(
        'btn-group',
        { 'btn-group-block': props.block },
        props.className
      )}>
      {props.children}
    </div>
  )
}

Group.displayName = "Button.Group";
Group.propTypes = {
  block: PropTypes.bool,
};
