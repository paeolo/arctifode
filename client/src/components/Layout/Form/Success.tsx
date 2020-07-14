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
    <Toast type="success" setError={props.setSucess} marginY='3'>
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
