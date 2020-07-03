import React from 'react';
import { useObserver } from 'mobx-react-lite';
import styles from './Topbar.module.scss';

import { Link, } from '@components/I18n';
import { Navbar, Button } from '@components/Core';
import { useTranslate, useInjection } from '../../hooks';
import { UserStore } from '../../stores';
import { StoresBindings } from '../../container';
import { TopbarSignout } from './TopbarSignout';

export const Topbar = () => {

  const userStore = useInjection<UserStore>(StoresBindings.USER);
  const { locale, t } = useTranslate();

  return useObserver(() =>
    <Navbar className={styles.topbar}>
      <Navbar.Section>
        <Navbar.Brand href='/'>
          {t('header.title')}
        </Navbar.Brand>
      </Navbar.Section>
      <Navbar.Section>
        {!userStore.isLogged &&
          <Link href='/register' passHref>
            <Button.Link>{t('navbar.register')}</Button.Link>
          </Link>
        }
        {!userStore.isLogged &&
          <Link href='/signin' passHref>
            <Button.Link>{t('navbar.signin')}</Button.Link>
          </Link>
        }
        {userStore.isLogged &&
          <TopbarSignout />
        }
      </Navbar.Section>
    </Navbar >
  );
}
