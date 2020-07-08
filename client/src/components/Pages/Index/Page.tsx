import React from 'react';

import { Container, Button, Icon, H4 } from '@components/Core';
import { Header, Divider } from '@components/Layout';
import { useTranslate } from '../../../hooks';
import { Link } from '@components/I18n';

export const IndexPage = () => {

  const { t } = useTranslate();

  return (
    <React.Fragment>
      <Header />
      <Container maxWidth="xl">
        <H4 inline>{t('index.projects')}</H4>
        <Link href="/projects/new" passHref>
          <Button.Link
            action
            size="small"
            position="right" >
            <Icon icon='fas fa-plus' />
          </Button.Link>
        </Link>
        <Divider />
      </Container>
    </React.Fragment >
  );
}
