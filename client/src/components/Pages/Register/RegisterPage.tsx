import React from 'react';

import { RegisterForm } from './RegisterForm';
import { Container } from '@components/Core';
import { Header, Footer } from '@components/Layout';

export const RegisterPage = () => {

  return (
    <React.Fragment>
      <Header />
      <Container maxWidth="lg">
        <RegisterForm />
      </Container>
      <Footer />
    </React.Fragment >
  );
}
