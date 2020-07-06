import React from 'react'
import { Toast } from "@components/Core"

import { useTranslate } from '../../../hooks';

interface ErrorProps {
  setError: (error: boolean) => void;
  message?: string;
}

export const Error = (props: ErrorProps) => {

  const { t } = useTranslate();

  return (
    <Toast color="error" setError={props.setError}>
      {(() => {
        if (props.message === undefined)
          return t('common.error');
        else
          return props.message
      })()
      }
    </Toast>
  )
}
