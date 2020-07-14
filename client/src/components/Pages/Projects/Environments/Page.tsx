import React from 'react';
import { Project } from '@openapi';

import { Footer, Divider } from '@components/Layout';
import { H4, H6 } from '@components/Core';
import { useTranslate } from '@hooks';

type EnvironmentsPageProps = {
  project: Project
};

export const EnvironmentsPage = (props: EnvironmentsPageProps) => {

  const { t } = useTranslate();

  return (
    <React.Fragment>
      <H4 marginY='3'>{t('sidebar.environments')}</H4>
      <H6>{t('environments.description')}</H6>
      <Divider />
      <Footer />
    </React.Fragment >
  );
}
