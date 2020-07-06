import React, { useState } from "react";
import { useFormik } from 'formik';
import { useObserver } from "mobx-react-lite";
import { ArtifactController } from "@openapi/.";

import {
  Form,
  Input,
} from "@components/Core/Form";
import {
  Section,
  Divider,
  Submit,
  Error
} from "@components/Layout";
import { useTranslate } from "../../../hooks";

export const UploadForm = () => {

  const { locale, t } = useTranslate();
  const [error, setError] = useState(false);

  const formik = useFormik({
    initialValues: {
      file: undefined
    },
    onSubmit: async values => {
      try {
        const formData = new FormData();
        formData.append('file', values.file);
        await ArtifactController.upload(formData)
          .on('progress', event => {
            console.log(event.percent)
          });
        setError(false);
      } catch {
        setError(true);
      }
    }
  });

  return useObserver(() =>
    <Section
      title='Title'
      subtitle='Subtitle'>
      <Form onSubmit={formik.handleSubmit} >
        <h4>Title</h4>
        <Form.Group>
          <Form.Label id='file'>
            File
          </Form.Label>
          <Input
            id='file'
            onChange={event =>
              formik.setFieldValue('file', event.currentTarget.files[0]
              )}
            type="file" />
        </Form.Group>
        <Divider />
        {error && <Error setError={setError} />}
        <Submit />
      </Form >
    </Section >
  )
}
