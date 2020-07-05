import React from "react";
import classNames from 'classnames/bind';
import styles from './Form.module.scss';

export const Hint: React.FC = props => {

  return (
    <p className={classNames.bind(styles)('form-input-hint')}>
      {props.children}
    </p>
  );
}

Hint.displayName = "Hint";
