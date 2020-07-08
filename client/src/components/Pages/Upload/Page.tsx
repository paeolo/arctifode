import React from 'react';

import { UploadForm } from './Form';
import { Container } from '@components/Core';
import { Header, Footer } from '@components/Layout';

export const UploadPage = () => {

  return (
    <React.Fragment>
      <Header />
      <Container maxWidth="lg">
        <UploadForm />
      </Container>
      <Footer />
    </React.Fragment >
  );
}
