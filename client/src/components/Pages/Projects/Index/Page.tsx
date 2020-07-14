import React from 'react';
import { Project } from '@openapi';

import { Tile, Avatar } from '@components/Core';
import { Divider } from '@components/Layout';
type DashboardPageProps = {
  project: Project
};

export const DashboardPage = (props: DashboardPageProps) => {

  return (
    <React.Fragment>
      <Tile centered marginY='3'>
        <Tile.Icon>
          <Avatar label={props.project.name.toUpperCase()[0]} marginR='2' size='lg' />
        </Tile.Icon>
        <Tile.Content>
          <Tile.Title>
            {props.project.name}
          </Tile.Title>
          <Tile.Subtitle>
            ID = {props.project.id}
          </Tile.Subtitle>
        </Tile.Content>
      </Tile>
      <Divider />
    </React.Fragment >
  );
}
