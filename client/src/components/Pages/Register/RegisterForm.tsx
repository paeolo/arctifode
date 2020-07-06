import React, { useState } from "react";
import { useRouter } from "next/router";
import { useFormik } from 'formik';
import { UserController } from "@openapi/.";
import * as yup from 'yup';

import {
  Form,
  Input
} from "@components/Core/Form";
import {
  Section,
  Divider,
  Submit,
  Error
} from "@components/Layout";
import { useTranslate } from "../../../hooks";

export const RegisterForm = () => {

  const router = useRouter();
  const { locale, t } = useTranslate();
  const [error, setError] = useState(false);

  const schema = yup.object().shape({
    username: yup.string()
      .min(3)
      .max(50)
      .required(),
    firstname: yup.string()
      .required(),
    lastname: yup.string()
      .required(),
    password: yup.string()
      .min(8)
      .max(50)
      .required(),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      firstname: '',
      lastname: '',
    },
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: async values => {
      try {
        await UserController.register({
          username: values.username,
          password: values.password,
          firstname: values.firstname,
          lastname: values.lastname
        });
        await UserController.login({
          username: values.username,
          password: values.password
        });
        router.replace('/[lang]', `/${locale}`);
        setError(false);
      } catch {
        setError(true);
      }
    }
  });

  return (
    <Section
      title={t('register.title')}
      subtitle={t('register.description')}>
      <Form onSubmit={formik.handleSubmit} >
        <h4>{t('register.title')}</h4>
        <Form.Group>
          <Form.Label htmlFor='username'>
            {t('register.username')}
          </Form.Label>
          <Input
            id='username'
            value={formik.values.username}
            error={formik.errors.username}
            onChange={formik.handleChange}
            type="text"
            placeholder="john.smith" />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='firstname'>
            {t('register.firstname')}
          </Form.Label>
          <Input
            id='firstname'
            value={formik.values.firstname}
            error={formik.errors.firstname}
            onChange={formik.handleChange}
            type="text"
            placeholder="John" />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='lastname'>
            {t('register.lastname')}
          </Form.Label>
          <Input
            id='lastname'
            value={formik.values.lastname}
            error={formik.errors.lastname}
            onChange={formik.handleChange}
            type="text"
            placeholder="Smith" />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='password'>
            {t('register.password')}
          </Form.Label>
          <Input
            id='password'
            value={formik.values.password}
            error={formik.errors.password}
            onChange={formik.handleChange}
            type="password"
            placeholder="********" />
        </Form.Group>
        <Divider />
        {error && <Error setError={setError} />}
        <Submit />
      </Form >
    </Section >
  );
}
