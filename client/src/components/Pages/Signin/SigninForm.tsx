import React, { useState } from "react";
import { useRouter } from "next/router";
import { useFormik } from 'formik';
import { useObserver } from "mobx-react-lite";
import { UserController } from "@openapi/.";

import {
  Form,
  CheckBox,
  Input
} from "@components/Core/Form";
import {
  Section,
  Divider,
  Submit
} from "@components/Layout";
import { useTranslate } from "../../../hooks";

export const SigninForm = () => {

  const router = useRouter();
  const { locale } = useTranslate();
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
      title='Sign in'
      subtitle='Provide your credentials...'>
      <Form onSubmit={formik.handleSubmit} >
        <h4>Sign in</h4>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Input
            id='username'
            value={formik.values.username}
            onChange={formik.handleChange}
            type="text"
            placeholder="john.smith" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Input
            id='password'
            value={formik.values.password}
            onChange={formik.handleChange}
            type="password"
            placeholder="********" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <CheckBox
            id='remember'
            label='Remember me'
            checked={formik.values.remember}
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Divider />
        <Submit />
      </Form >
    </Section >
  )
}
