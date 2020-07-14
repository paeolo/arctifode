import React from 'react';
import {
  Row,
  Column,
  Bar,
  Button,
  Icon
} from "@components/Core";

interface ProgressProps {
  progress: number;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Progress = (props: ProgressProps) => {

  return (
    <Row align="center">
      <Column size="10">
        <Bar progress={props.progress} />
      </Column>
      <Column size="1" offset="ml">
        <Button
          action
          onClick={props.onClick}
          size="small">
          <Icon icon='fas fa-times' />
        </Button>
      </Column>
    </Row>
  );
}
