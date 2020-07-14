import React from "react";
import { GetServerSideProps } from "next";
import { Project, ProjectController, withCookie, obtain } from "@openapi";

import { IndexPage } from "@components/Pages";
import { WithLocale, getLocaleProps } from "@components/I18n";
import { WithAuthentication, getAuthenticationProps } from "@components/Authentication";
import { HtmlHead } from "@components/Core";
import { Topbar } from "@components/Topbar";

type IndexProps = {
  projects: Project[];
}

const Index = (props: IndexProps) => {
  return (
    <React.Fragment>
      <HtmlHead />
      <Topbar />
      <IndexPage projects={props.projects} />
    </React.Fragment>
  );
}

export default WithLocale(WithAuthentication(Index));

export const getServerSideProps: GetServerSideProps = async context => {

  const lang = context.params.lang as string;
  const localeProps = await getLocaleProps(lang);
  const authenticationProps = await getAuthenticationProps(context);
  const cookie = context.req.headers.cookie;
  let projects = [];
  try {
    if (authenticationProps.currentUser !== null)
      projects = await withCookie(cookie)(ProjectController.obtainAll());
    else
      projects = await obtain(ProjectController.obtainAllPublic());
  } catch (error) { }

  return {
    props: {
      projects: projects,
      ...authenticationProps,
      ...localeProps
    }
  }
}
