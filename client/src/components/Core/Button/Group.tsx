import PropTypes from "prop-types";
import React from "react";

import classNames from 'classnames/bind';
import styles from './Button.module.scss';

export type GroupProps = {
  block?: boolean;
};

export const Group: React.FC<GroupProps> = props => {

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

Group.displayName = "Button.Group";
Group.propTypes = {
  block: PropTypes.bool,
};
