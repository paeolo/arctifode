import { setLocale } from 'yup';

export function initYup() {
  setLocale({
    mixed: {
      default: ({ path }) => ({ key: 'validation.default', values: { path } }),
      required: ({ path }) => ({ key: 'validation.required', values: { path } })
    },
    string: {
      min: ({ min }) => ({ key: 'validation.min', values: { min } }),
      max: ({ max }) => ({ key: 'validation.max', values: { max } }),
    },
  });
}
