import React from 'react';

import { Container, Button, Icon, H4 } from '@components/Core';
import { Header, Divider } from '@components/Layout';
import { useTranslate } from '../../../hooks';

export const IndexPage = () => {

  const { locale, t } = useTranslate();

  return (
    <React.Fragment>
      <Header />
      <Container maxWidth="xl">
        <H4 inline>{t('index.projects')}</H4>
        <Button action size="small" position="right" >
          <Icon icon='fas fa-plus' />
        </Button>
        <Divider />
      </Container>
    </React.Fragment >
  );
}
