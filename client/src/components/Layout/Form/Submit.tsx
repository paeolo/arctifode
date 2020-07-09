import React from 'react';
import { Button, Form } from "@components/Core";

import { useTranslate } from '../../../hooks';

interface SubmitProps {
  loading?: boolean;
  error?: boolean;
}

export const Submit = (props: SubmitProps) => {

  const { t } = useTranslate();

  return (
    <Form.Group>
      <Button.Submit
        color={props.error ? "error" : "primary"}
        state={props.loading ? "loading" : "active"}>
        {t('common.submit')}
      </Button.Submit>
    </Form.Group>
  )
}
