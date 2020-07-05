import React from 'react'
import { Toast } from "@components/Core"

import { useTranslate } from '../../../hooks';

interface ErrorProps {
  setError: (error: boolean) => void;
}

export const Error = (props: ErrorProps) => {

  const { t } = useTranslate();

  return (
    <Toast color="error" setError={props.setError}>
      {t('common.error')}
    </Toast>
  )
}
