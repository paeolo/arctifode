import React from 'react';
import { useObserver } from 'mobx-react-lite';

import { Button, Menu, Navbar } from '@components/Core';
import { Link, SwitchLanguage } from '@components/I18n';
import { locales } from '../../locales';

import { useTranslate, useInjection } from '../../hooks';
import { UserStore } from '../../stores';
import { StoresBindings } from '../../container';
import { TopbarSignout } from './TopbarSignout';

export const Topbar = () => {

  const userStore = useInjection<UserStore>(StoresBindings.USER);
  const { locale, t } = useTranslate();

  return useObserver(() =>
    <Navbar>
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
          <Menu.Dropdown
            label={userStore.currentUser.username}
            icon='fas fa-user-circle'
            right>
            <Menu>
              <Menu.Item>
                <TopbarSignout />
              </Menu.Item>
            </Menu>
          </Menu.Dropdown>
        }
        <Menu.Dropdown label={locale} right>
          <Menu>
            {locales.map(value =>
              <Menu.Item key={value}>
                <SwitchLanguage locale={value}>
                  <Button.Link>
                    {value}
                  </Button.Link>
                </SwitchLanguage>
              </Menu.Item>
            )}
          </Menu>
        </Menu.Dropdown>
      </Navbar.Section>
    </Navbar >
  );
}
