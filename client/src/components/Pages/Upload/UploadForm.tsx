import React from "react";
import { useFormik } from 'formik';
import { ArtifactController } from "@openapi/.";
import { useLocalStore, useObserver } from "mobx-react-lite";
import * as yup from 'yup';

import {
  Form,
  Input,
  Bar
} from "@components/Core";
import {
  Section,
  Divider,
  Submit,
  Error,
  Success
} from "@components/Layout";
import { useTranslate } from "../../../hooks";

export const UploadForm = () => {

  const { locale, t } = useTranslate();
  const store = useLocalStore(() => ({
    error: false,
    success: false,
    loading: false,
    progress: 0
  }));

  const schema = yup.object().shape({
    file: yup.mixed().required()
  });

  const formik = useFormik({
    initialValues: {
      file: ''
    },
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: async values => {
      try {
        const formData = new FormData();
        formData.append('file', values.file);
        store.loading = true;
        await ArtifactController.upload(formData)
          .on('progress', event => {
            store.progress = Math.ceil(event.percent);
          });
        store.error = false;
        store.loading = false;
        store.success = true;
        store.progress = 0;
      } catch {
        store.error = true;
        store.loading = false;
        store.progress = 0;
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
            error={formik.errors.file}
            type="file" />
        </Form.Group>
        <Divider />
        {store.success &&
          <Success setSucess={success => store.success = success} />
        }
        {store.error &&
          <Error setError={error => store.error = error} />
        }
        {store.loading && <Bar progress={store.progress} />}
        {!store.loading && <Submit />}
      </Form >
    </Section >
  );
}
