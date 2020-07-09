import { useRouter } from "next/router";
import { UserController } from "@openapi";

import { useTranslate } from "../../hooks";
import { Button } from "@components/Core";

export const TopbarSignout = () => {

  const router = useRouter();
  const { t } = useTranslate();

  const onClick = async () => {
    await UserController.logout();
    router.replace('/');
  }

  return (
    <Button.Link
      color="link"
      onClick={onClick}>
      {t('navbar.signout')}
    </Button.Link>
  );
}
