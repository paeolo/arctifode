import React from 'react';
import { UserStore } from '@stores';
import { useTranslate, useInjection } from '@hooks';

import { Container, Button, Icon, H4, Empty } from '@components/Core';
import { Header, Divider } from '@components/Layout';
import { Link } from '@components/I18n';

import { Project } from '@openapi';
import { StoresBindings } from '@container';
import { List } from './List';


export type IndexPageProps = {
  projects: Project[];
}

export const IndexPage = (props: IndexPageProps) => {

  const { t } = useTranslate();
  const userStore = useInjection<UserStore>(StoresBindings.USER);

  return (
    <React.Fragment>
      <Header />
      <Container maxWidth="xl" paddingX="medium">
        <H4 inline>{t('index.projects')}</H4>
        {userStore.isLogged &&
          <Link href="/projects/new" passHref>
            <Button.Link
              action
              size="small"
              float="right">
              <Icon icon='fas fa-plus' />
            </Button.Link>
          </Link>
        }
        {!userStore.isLogged &&
          <Button.Link
            action
            state="disabled"
            tooltip={t('index.please_connect')}
            tooltipPosition='left'
            size="small"
            float="right">
            <Icon icon='fas fa-plus' />
          </Button.Link>
        }
        <Divider />
        {props.projects.length > 0 && < List projects={props.projects} />}
        {props.projects.length == 0 &&
          <Empty>
            <Empty.Icon>
              <Icon icon='fas fa-road' size='huge' />
            </Empty.Icon>
            <Empty.Title>
              {t('index.no_projects')}
            </Empty.Title>
          </Empty>
        }
      </Container>
    </React.Fragment >
  );
}
