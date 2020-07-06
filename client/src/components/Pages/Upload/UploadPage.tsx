import React from 'react';

import { UploadForm } from './UploadForm';
import { Grid } from '@components/Core';
import { Header, Footer } from '@components/Layout';

export const UploadPage = () => {

  return (
    <React.Fragment>
      <Header />
      <Grid maxWidth="lg">
        <UploadForm />
      </Grid>
      <Footer />
    </React.Fragment >
  );
}
