import cookie from 'cookie';

export function getApiURL() {
  if (typeof window === 'undefined') {
    return process.env.API_URL;
  }
  else {
    return cookie.parse(document.cookie)['API_URL'];
  }
}
