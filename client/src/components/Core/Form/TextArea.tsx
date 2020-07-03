import React, { ComponentProps } from "react";
import classNames from "classnames";

export type TextAreaProps = {
  className?: string;
} & ComponentProps<'textarea'>;

export const TextArea: React.FC<TextAreaProps> = props => {

  const { className, ...rest } = props;

  return (
    <textarea
      className={classNames("form-input", className)}
      {...rest}
    />
  );
}

TextArea.displayName = "TextArea";
