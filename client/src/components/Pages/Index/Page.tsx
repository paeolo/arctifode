import React from 'react';

import { Container, Button, Icon, H4 } from '@components/Core';
import { Header, Divider } from '@components/Layout';
import { useTranslate, useInjection } from '@hooks';
import { Link } from '@components/I18n';
import { UserStore } from '@stores';
import { StoresBindings } from '@container';

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
      </Container>
    </React.Fragment >
  );
}
