import React from 'react';
import { useRouter } from 'next/router';

import { Button, Form } from "@components/Core";
import { useTranslate } from '@hooks';

interface SubmitProps {
  loading?: boolean;
  error?: boolean;
  withCancel?: boolean;
}

export const Submit = (props: SubmitProps) => {

  const router = useRouter();
  const { t } = useTranslate();

  return (
    <Form.Group>
      <Button.Submit
        color={props.error ? "error" : "primary"}
        state={props.loading ? "loading" : "active"}>
        {t('common.submit')}
      </Button.Submit>
      {props.withCancel &&
        <Button
          marginX="normal"
          color="link"
          onClick={() => router.back()}>
          {t('common.cancel')}
        </Button>
      }
    </Form.Group>
  )
}
