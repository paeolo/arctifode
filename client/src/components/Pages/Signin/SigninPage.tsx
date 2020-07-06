import React from 'react';

import { SigninForm } from './SigninForm';
import { Container } from '@components/Core';
import { Header, Footer } from '@components/Layout';

export const SigninPage = () => {

  return (
    <React.Fragment>
      <Header />
      <Container maxWidth="lg">
        <SigninForm />
      </Container>
      <Footer />
    </React.Fragment >
  );
}
