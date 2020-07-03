import React, { ComponentProps } from "react";
import classNames from "classnames";

import { SelectOption } from "./SelectOption";

export type SelectProps = {
  className?: string;
} & ComponentProps<'select'>;

const SelectFC: React.FC<SelectProps> = props => {

  const { className, ...rest } = props;

  return (
    <select
      className={classNames("form-input", className)}
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
