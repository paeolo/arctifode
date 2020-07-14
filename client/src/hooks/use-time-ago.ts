import { useContext } from 'react';

import { I18nContext } from '../components/I18n/I18nProvider';
import { TimeAgoFn } from '../components/I18n';

export function useTimeAgo(): TimeAgoFn {
  return useContext(I18nContext).timeAgo;
}
