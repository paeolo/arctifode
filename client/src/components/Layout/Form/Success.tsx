import React from 'react';
import { Toast } from "@components/Core";

import { useTranslate } from '../../../hooks';

interface SuccessProps {
  setSucess: (success: boolean) => void;
  message?: string;
}

export const Success = (props: SuccessProps) => {

  const { t } = useTranslate();

  return (
    <Toast color="success" setError={props.setSucess}>
      {(() => {
        if (props.message === undefined)
          return t('common.success');
        else
          return props.message
      })()
      }
    </Toast>
  )
}
