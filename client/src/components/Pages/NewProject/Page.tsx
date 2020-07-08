import React from 'react';

import { NewForm } from './Form';
import { Container } from '@components/Core';
import { Header, Footer } from '@components/Layout';

export const NewPage = () => {

  return (
    <React.Fragment>
      <Header />
      <Container maxWidth="lg">
        <NewForm />
      </Container>
      <Footer />
    </React.Fragment >
  );
}
