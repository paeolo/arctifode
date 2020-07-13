import React from 'react';
import { Project } from '@openapi';

import { UploadForm } from './Form';
import { Header, Footer } from '@components/Layout';

type ArtifactsPageProps = {
  project: Project
};

export const ArtifactsPage = (props: ArtifactsPageProps) => {

  return (
    <React.Fragment>
      <Header />
      <UploadForm />
      <Footer />
    </React.Fragment >
  );
}
