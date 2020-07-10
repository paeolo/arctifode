import { useContext } from 'react';
import { I18nContext } from '../components/I18n/I18nProvider';
import TimeAgo from 'javascript-time-ago';

export function useTimeAgo(): TimeAgo {
  return useContext(I18nContext).timeAgo;
}
