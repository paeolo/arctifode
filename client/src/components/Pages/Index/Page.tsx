import React from 'react';
import { UserStore } from '@stores';
import { useTranslate, useInjection } from '@hooks';

import { Container, Button, Icon, H4 } from '@components/Core';
import { Header, Divider } from '@components/Layout';
import { Link } from '@components/I18n';

import { StoresBindings } from '@container';
import { List } from './List';

export const IndexPage = () => {

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
              position="right">
              <Icon icon='fas fa-plus' />
            </Button.Link>
          </Link>
        }
        {!userStore.isLogged &&
          <Button.Link
            action
            state="disabled"
            tooltip={t('index.please_connect')}
            size="small"
            position="right">
            <Icon icon='fas fa-plus' />
          </Button.Link>
        }
        <Divider />
        <List />
      </Container>
    </React.Fragment >
  );
}
