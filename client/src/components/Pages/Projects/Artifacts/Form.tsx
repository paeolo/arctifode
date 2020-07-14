import React from "react";
import { useFormik } from 'formik';
import { ArtifactController } from "@openapi";
import { useLocalStore, useObserver } from "mobx-react-lite";
import * as yup from 'yup';

import {
  Form,
  Input,
  H4
} from "@components/Core";
import {
  Section,
  Divider,
  Submit,
  Error,
  Success,
  Progress
} from "@components/Layout";

export const UploadForm = () => {

  const store = useLocalStore(() => ({
    error: false,
    success: false,
    loading: false,
    progress: 0,
    request: undefined,
    setProgress(percent: number) {
      store.progress = Math.ceil(percent)
    }
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
        store.progress = 0;
        store.loading = true;
        store.request = ArtifactController.upload(formData)
          .on('progress', event => store.setProgress(event.percent));
        await store.request;
        store.error = false;
        store.loading = false;
        store.success = true;
      } catch (error) {
        store.loading = false;
        if (!error.code || error.code !== 'ABORTED')
          store.error = true;
      }
    }
  });

  return useObserver(() =>
    <Form onSubmit={formik.handleSubmit} >
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
      {store.loading &&
        <Progress
          progress={store.progress}
          onClick={() => store.request.abort()}
        />
      }
      {!store.loading && <Submit />}
    </Form >
  );
}
