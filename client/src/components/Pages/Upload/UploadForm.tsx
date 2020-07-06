import React from "react";
import { useFormik } from 'formik';
import { ArtifactController } from "@openapi/.";
import { useLocalStore, useObserver } from "mobx-react-lite";
import * as yup from 'yup';

import {
  Form,
  Input,
  Bar,
  Row,
  Column,
  Button,
  Icon
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
    progress: 0,
    request: undefined
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
        store.request = ArtifactController.upload(formData)
          .on('progress', event => store.progress = Math.ceil(event.percent));
        await store.request;
        store.error = false;
        store.loading = false;
        store.success = true;
        store.progress = 0;
      } catch (error) {
        store.loading = false;
        store.progress = 0;
        if (!error.code || error.code !== 'ABORTED')
          store.error = true;
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
        {store.loading &&
          <Row align="center">
            <Column size="10">
              <Bar progress={store.progress} />
            </Column>
            <Column size="1" offset="ml">
              <Button
                action
                onClick={() => store.request.abort()}
                size="small">
                <Icon icon='fas fa-times' />
              </Button>
            </Column>
          </Row>
        }
        {!store.loading && <Submit />}
      </Form >
    </Section >
  );
}
