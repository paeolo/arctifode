import React from "react";
import { GetServerSideProps } from "next";

import { NewPage } from "@components/Pages";
import { WithLocale, getLocaleProps } from "@components/I18n";
import { HtmlHead } from "@components/Core";
import { Topbar } from "@components/Topbar";
import { WithAuthentication, getAuthenticationProps } from "@components/Authentication";
import { UserRole } from "@openapi";

const New = () => {
  return (
    <React.Fragment>
      <HtmlHead />
      <Topbar />
      <NewPage />
    </React.Fragment>
  );
}

export default WithLocale(WithAuthentication(New));

export const getServerSideProps: GetServerSideProps = async context => {

  const lang = context.params.lang as string;
  const localeProps = await getLocaleProps(lang);
  const authenticationProps = await getAuthenticationProps(
    context,
    [UserRole.MEMBER, UserRole.ADMIN]
  );
  return {
    props: {
      ...authenticationProps,
      ...localeProps
    }
  }
}
