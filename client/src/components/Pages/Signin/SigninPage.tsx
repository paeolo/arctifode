import React from 'react';

import { SigninForm } from './SigninForm';
import { Grid } from '@components/Core';
import { Header, Footer } from '@components/Layout';

export const SigninPage = () => {

  return (
    <React.Fragment>
      <Header />
      <Grid maxWidth="lg">
        <SigninForm />
      </Grid>
      <Footer />
    </React.Fragment >
  );
}
