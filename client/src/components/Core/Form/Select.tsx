import React, { ComponentProps } from "react";

import classNames from 'classnames/bind';
import styles from './Form.module.scss';

import { SelectOption } from "./SelectOption";

export type SelectProps = {
} & Omit<ComponentProps<'select'>, 'className'>;

const SelectFC: React.FC<SelectProps> = props => {

  return (
    <select className={classNames.bind(styles)('form-input')}>
      {props.children}
    </select>
  );
}

export const Select = Object.assign(
  SelectFC,
  {
    displayName: "Select",
    Option: SelectOption,
  }
);
