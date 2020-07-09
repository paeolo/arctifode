import React, { useState } from "react";
import { useRouter } from "next/router";
import { useFormik } from 'formik';
import * as yup from 'yup';

import {
  ProjectController,
  Visibility,
  obtain
} from "@openapi";
import {
  Form,
  Input,
  H4,
  TextArea,
  Radio,
  Icon,
} from "@components/Core";
import {
  Divider,
  Submit,
  Error
} from "@components/Layout";
import { useTranslate } from "@hooks";

export const NewForm = () => {

  const router = useRouter();
  const { locale, t } = useTranslate();
  const [error, setError] = useState(false);

  const schema = yup.object().shape({
    name: yup.string()
      .min(2)
      .max(50)
      .required()
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      repository: '',
      visibility: Visibility.PRIVATE
    },
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: async values => {
      try {
        const project = await obtain(ProjectController.create({
          name: values.name,
          description: values.description,
          visibility: values.visibility
        }));
        router.replace(
          '/[lang]/projects/[id]',
          `/${locale}/projects/${project.id}`
        );
        setError(false);
      } catch {
        setError(true);
      }
    }
  });

  return (
    <Form onSubmit={formik.handleSubmit} >
      <H4>{t('new_project.title')}</H4>
      <Form.Group>
        <Form.Label htmlFor='name'>
          {t('new_project.project_name')}
        </Form.Label>
        <Input
          id='name'
          value={formik.values.name}
          error={formik.errors.name}
          onChange={formik.handleChange}
          type="text"
          placeholder={t('new_project.placeholder_name')} />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor='description'>
          {t('new_project.project_description')}
        </Form.Label>
        <TextArea
          id='description'
          value={formik.values.description}
          onChange={formik.handleChange}
          placeholder={t('new_project.placeholder_description')} />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor='repository'>
          {t('new_project.project_repository')}
        </Form.Label>
        <Input
          id='repository'
          disabled
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor='visibility'>
          {t('visibility.title')}
        </Form.Label>
        <Radio
          id='visibility'
          value={Visibility.PRIVATE}
          formik={formik}>
          <Icon icon='fas fa-lock' margin="right" />
          {t('visibility.private')}
        </Radio>
        <Radio
          id='visibility'
          value={Visibility.PUBLIC}
          formik={formik}>
          <Icon icon='fas fa-globe' margin="right" />
          {t('visibility.public')}
        </Radio>
      </Form.Group>
      <Divider />
      {error && <Error setError={setError} />}
      <Submit withCancel />
    </Form >
  );
}
