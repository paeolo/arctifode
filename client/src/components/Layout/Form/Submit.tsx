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
      <Button
        color={props.error ? "error" : "primary"}
        state={props.loading ? "loading" : "active"}
        type="submit">
        {t('common.submit')}
      </Button>
    </Form.Group>
  )
}
