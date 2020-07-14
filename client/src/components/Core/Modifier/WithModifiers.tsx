import React from 'react';
import classNames from 'classnames';
import { DefaultsType } from '../types';

export const ModifierTypes = {
  sizes: ["1", "2", "3", "4"] as const,
  positions: ["left", "right"] as const,
};

type BaseProps = {
  className?: string;
  children?: React.ReactNode;
}

export type ModifiersProps = {
  marginX?: typeof ModifierTypes["sizes"][number];
  marginY?: typeof ModifierTypes["sizes"][number];
  marginL?: typeof ModifierTypes["sizes"][number];
  marginR?: typeof ModifierTypes["sizes"][number];
  paddingX?: typeof ModifierTypes["sizes"][number];
  paddingY?: typeof ModifierTypes["sizes"][number];
  float?: typeof ModifierTypes["positions"][number];
  inline?: boolean;
  color?: typeof DefaultsType["colors"][number];
} & BaseProps;

export const WithModifiers = <T extends object>(Component: React.FC<any>) => React.forwardRef(
  (props: ModifiersProps & T, ref) => {
    const {
      className,
      marginX,
      marginY,
      marginL,
      marginR,
      paddingX,
      paddingY,
      float,
      inline,
      color,
      ...rest
    } = props;

    return (
      <Component
        ref={ref}
        className={classNames(
          {
            [`mx-${marginX}`]: marginX,
            [`my-${marginY}`]: marginY,
            [`ml-${marginL}`]: marginL,
            [`mr-${marginR}`]: marginR,
            [`px-${paddingX}`]: paddingX,
            [`py-${paddingY}`]: paddingY,
            [`float-${float}`]: float,
            'd-inline': inline,
            [`text-${color}`]: color
          },
          className
        )}
        {...rest} />
    );
  }
);
