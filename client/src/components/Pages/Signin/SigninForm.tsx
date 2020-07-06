import React, { useState } from "react";
import { useRouter } from "next/router";
import { useFormik } from 'formik';
import { UserController } from "@openapi/.";
import * as yup from 'yup';

import {
  Form,
  Input,
  Switch
} from "@components/Core/Form";
import {
  Section,
  Divider,
  Submit,
  Error
} from "@components/Layout";
import { useTranslate } from "../../../hooks";

export const SigninForm = () => {

  const router = useRouter();
  const { locale, t } = useTranslate();
  const [error, setError] = useState(false);

  const schema = yup.object().shape({
    username: yup.string()
      .min(3)
      .max(50)
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
      remember: false
    },
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: async values => {
      try {
        await UserController.login({
          username: values.username,
          password: values.password
        }, values.remember);
        router.replace('/[lang]', `/${locale}`);
        setError(false);
      } catch {
        setError(true);
      }
    }
  });

  return (
    <Section
      title={t('signin.title')}
      subtitle={t('signin.description')}>
      <Form onSubmit={formik.handleSubmit} >
        <h4>{t('signin.title')}</h4>
        <Form.Group>
          <Form.Label htmlFor='username'>
            {t('signin.username')}
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
          <Form.Label htmlFor='password'>
            {t('signin.password')}
          </Form.Label>
          <Input
            id='password'
            value={formik.values.password}
            error={formik.errors.password}
            onChange={formik.handleChange}
            type="password"
            placeholder="********" />
        </Form.Group>
        <Form.Group>
          <Switch
            id='remember'
            label={t('signin.remember')}
            checked={formik.values.remember}
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Divider />
        {error && <Error
          message={t('signin.error')}
          setError={setError} />
        }
        <Submit />
      </Form >
    </Section >
  );
}
