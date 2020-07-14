import React from 'react';
import { Project } from '@openapi';

import { Footer, Divider } from '@components/Layout';
import { H4, H6 } from '@components/Core';
import { useTranslate } from '@hooks';

type ReleasesPageProps = {
  project: Project
};

export const ReleasesPage = (props: ReleasesPageProps) => {

  const { t } = useTranslate();

  return (
    <React.Fragment>
      <H4 marginY='3'>{t('sidebar.releases')}</H4>
      <H6>{t('releases.description')}</H6>
      <Divider />
      <Footer />
    </React.Fragment >
  );
}
