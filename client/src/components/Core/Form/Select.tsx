import React, { ComponentProps } from "react";

import classNames from 'classnames/bind';
import styles from './Form.module.scss';

import { SelectOption } from "./SelectOption";

export type SelectProps = {
  className?: string;
} & ComponentProps<'select'>;

const SelectFC: React.FC<SelectProps> = props => {

  const { className, ...rest } = props;

  return (
    <select
      className={classNames.bind(styles)("form-input", className)}
      {...rest}
    />
  );
}

export const Select = Object.assign(
  SelectFC,
  {
    displayName: "Select",
    Option: SelectOption,
  }
);
