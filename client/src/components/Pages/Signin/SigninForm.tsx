import React, { useState } from "react";
import { useRouter } from "next/router";
import { useFormik } from 'formik';
import { useObserver } from "mobx-react-lite";
import { UserController } from "@openapi/.";

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

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      remember: false
    },
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

  return useObserver(() =>
    <Section
      title={t('signin.title')}
      subtitle={t('signin.description')}>
      <Form onSubmit={formik.handleSubmit} >
        <h4>{t('signin.title')}</h4>
        <Form.Group>
          <Form.Label id='username'>
            {t('signin.username')}
          </Form.Label>
          <Input
            id='username'
            value={formik.values.username}
            onChange={formik.handleChange}
            type="text"
            placeholder="john.smith" />
        </Form.Group>
        <Form.Group>
          <Form.Label id='password'>
            {t('signin.password')}
          </Form.Label>
          <Input
            id='password'
            value={formik.values.password}
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
        {error && <Error setError={setError} />}
        <Submit />
      </Form >
    </Section >
  )
}
