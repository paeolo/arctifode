import React from 'react'
import { Button, Form } from "@components/Core"

interface SubmitProps {
  loading?: boolean;
  error?: boolean;
}

export const Submit = (props: SubmitProps) => {

  return (
    <Form.Group>
      <Button
        color={props.error ? "error" : "primary"}
        state={props.loading ? "loading" : "active"}
        type="submit">
        Submit
      </Button>
    </Form.Group>
  )
}
