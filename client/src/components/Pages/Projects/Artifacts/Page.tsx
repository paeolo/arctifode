import React from 'react';
import { Project } from '@openapi';

import { Footer, Divider } from '@components/Layout';
import { H4, H6 } from '@components/Core';
import { useTranslate } from '@hooks';

type ArtifactsPageProps = {
  project: Project
};

export const ArtifactsPage = (props: ArtifactsPageProps) => {

  const { t } = useTranslate();

  return (
    <React.Fragment>
      <H4 marginY='3'>{t('sidebar.artifacts')}</H4>
      <H6>{t('artifacts.description')}</H6>
      <Divider />
      <Footer />
    </React.Fragment >
  );
}
