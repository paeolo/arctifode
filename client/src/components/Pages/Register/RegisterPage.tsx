import React from 'react';

import { RegisterForm } from './RegisterForm';
import { Grid } from '@components/Core';
import { Header, Footer } from '@components/Layout';

export const RegisterPage = () => {

  return (
    <React.Fragment>
      <Header />
      <Grid maxWidth="lg">
        <RegisterForm />
      </Grid>
      <Footer />
    </React.Fragment >
  );
}
