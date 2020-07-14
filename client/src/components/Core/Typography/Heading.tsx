import React from 'react';

import { Label } from './Label';
import { WithModifiers } from '../Modifier';

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
  label?: string;
};

const Heading = (Component: React.FC<React.HTMLProps<HTMLHeadingElement>>) =>
  WithModifiers<HeadingProps>(
    (props: HeadingProps) => {

      return (
        <Component
          className={props.className}>
          {props.children}
          {props.label && <Label label={props.label} />}
        </Component>
      );
    }
  )

export const H1 = Heading(props => <h1 {...props} />);
export const H2 = Heading(props => <h2 {...props} />);
export const H3 = Heading(props => <h3 {...props} />);
export const H4 = Heading(props => <h4 {...props} />);
export const H5 = Heading(props => <h5 {...props} />);
export const H6 = Heading(props => <h6 {...props} />);
