import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";

import { RegisterPage } from "@components/Pages";
import { WithLocale, getLocaleProps, getLocalePaths } from "@components/I18n";
import { HtmlHead } from "@components/Core";
import { Topbar } from "@components/Topbar";

const Register = () => {
  return (
    <React.Fragment>
      <HtmlHead />
      <Topbar />
      <RegisterPage />
    </React.Fragment>
  );
}

export default WithLocale(Register);

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const lang: string = params.lang as string;
  const localeProps = await getLocaleProps(lang);
  return {
    props: { ...localeProps }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return getLocalePaths();
}
