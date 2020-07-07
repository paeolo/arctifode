import cookie from 'cookie';
import getConfig from 'next/config';

export function getApiURL() {
  if (typeof window === 'undefined') {
    return getConfig().serverRuntimeConfig.API_URL;
  }
  else {
    return cookie.parse(document.cookie)['API_URL'];
  }
}
