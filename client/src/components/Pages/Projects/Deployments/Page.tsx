import React from 'react';
import { Project } from '@openapi';

import { Footer, Divider } from '@components/Layout';
import { H4, H6 } from '@components/Core';
import { useTranslate } from '@hooks';

type DeploymentsPageProps = {
  project: Project
};

export const DeploymentsPage = (props: DeploymentsPageProps) => {

  const { t } = useTranslate();

  return (
    <React.Fragment>
      <H4 marginY='3'>{t('sidebar.deployments')}</H4>
      <H6>{t('deployments.description')}</H6>
      <Divider />
      <Footer />
    </React.Fragment >
  );
}
