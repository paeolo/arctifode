import React from "react";
import { GetServerSideProps } from "next";

import { SettingsPage } from "@components/Pages";
import { WithSidebar, SidebarItem } from '@components/Sidebar';
import { WithLocale, getLocaleProps } from "@components/I18n";
import { WithAuthentication, getAuthenticationProps } from "@components/Authentication";
import { HtmlHead } from "@components/Core";
import { WithTopbar } from "@components/Topbar";
import { withCookie, ProjectController, Project } from "@openapi";

type IndexProps = {
  project: Project;
}

const Index = (props: IndexProps) => {
  return (
    <React.Fragment>
      <HtmlHead />
      <WithTopbar>
        <WithSidebar
          label={props.project.name}
          id={props.project.id}
          active={SidebarItem.SETTINGS}>
          <SettingsPage project={props.project} />
        </WithSidebar>
      </WithTopbar>
    </React.Fragment>
  );
}

export default WithLocale(WithAuthentication(Index));

export const getServerSideProps: GetServerSideProps = async context => {

  const lang = context.params.lang as string;
  const localeProps = await getLocaleProps(lang);
  const authenticationProps = await getAuthenticationProps(context);
  const cookie = context.req.headers.cookie;
  const project = await withCookie(cookie)(
    ProjectController.obtainOne(Number.parseInt(context.params.id as string))
  );
  return {
    props: {
      project: project,
      ...authenticationProps,
      ...localeProps
    }
  }
}
