import { Visibility } from '@openapi';

export function getVisibilityIcon(value: Visibility) {
  switch (value) {
    case Visibility.PRIVATE:
      return 'fas fa-lock';
    case Visibility.PUBLIC:
      return 'fas fa-globe';
  }
}
